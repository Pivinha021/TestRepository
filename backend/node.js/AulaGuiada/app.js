import pg from 'pg';
const { Client } = pg;


// Configuração da conexão
// São as mesmas informações que você usa no pgAdmin!
const client = new Client({
    host:     'localhost',  // onde o banco está rodando
    port:     5432,         // porta padrão do PostgreSQL
    user:     'postgres',   // usuário do banco
    password: 'root',  // a mesma senha que você usa no pgAdmin
    database: 'alquimista_db' // o banco que criamos agora pouco
});

async function minhaFuncao() {

    try {

        // Aqui fica tudo que queremos tentar fazer
        // Se qualquer linha aqui der erro, o catch captura

        await client.connect();
        const resultado = await client.query('SELECT * FROM itens');
        console.log(resultado.rows);

    } catch (erro) {

        // Se algo deu errado no try, cai aqui
        // O erro tem uma mensagem que nos diz o que aconteceu
        console.log('❌ Erro:', erro.message);

    } finally {

        // Isso SEMPRE executa — deu certo ou não
        // É aqui que fechamos a conexão com o banco
        await client.end();

    }
}

async function listarItens() {

    try {

        await client.connect();

        const resultado = await client.query(
            'SELECT * FROM itens ORDER BY tipo, nome'
        );

        console.log('\n╔════════════════════════════════════════════════════╗');
        console.log('║         ⚗️  LOJA DO ALQUIMISTA VALDRIS              ║');
        console.log('╚════════════════════════════════════════════════════╝\n');

        if (resultado.rows.length === 0) {
            console.log('A loja está vazia no momento.');
        } else {
            resultado.rows.forEach(item => {
                console.log(`[${item.id}] ${item.nome}`);
                console.log(`    Tipo: ${item.tipo} | Preço: R$ ${item.preco} | Estoque: ${item.estoque}`);
                console.log(`    ${item.descricao}`);
                console.log('    ─────────────────────────────────────────');
            });
            console.log(`\nTotal de itens: ${resultado.rows.length}`);
        }

    } catch (erro) {

        console.log('❌ Erro ao listar itens:', erro.message);

    } finally {
        async function cadastrarItem() {

            try {
        
                await client.connect();
        
                console.log('\n⚗️  CADASTRAR NOVO ITEM\n');
        
                const nome      = prompt('Nome do item: ');
                const tipo      = prompt('Tipo (Poção/Ingrediente/Elixir): ');
                const preco     = prompt('Preço: ');
                const estoque   = prompt('Estoque inicial: ');
                const descricao = prompt('Descrição: ');
        
                // Validação básica antes de ir ao banco
                if (!nome || !tipo || !preco) {
                    console.log('❌ Nome, tipo e preço são obrigatórios.');
                    return; // sai da função sem ir ao banco
                }
        
                const resultado = await client.query(
                    `INSERT INTO itens (nome, tipo, preco, estoque, descricao)
                     VALUES ($1, $2, $3, $4, $5)
                     RETURNING *`,
                    [nome, tipo, preco, estoque, descricao]
                );
        
                console.log('\n✅ Item cadastrado com sucesso!');
                console.log(`   ID gerado pelo banco: ${resultado.rows[0].id}`);
                console.log(`   ${resultado.rows[0].nome} adicionado à loja.`);
        
            } catch (erro) {
        
                console.log('❌ Erro ao cadastrar item:', erro.message);
        
            } finally {
        
                await client.end();
        
            }
        }
        await client.end();

    }
}

async function atualizarEstoque() {

    try {

        await client.connect();

        // Mostra os itens antes de perguntar qual atualizar
        const lista = await client.query(
            'SELECT id, nome, estoque FROM itens ORDER BY nome'
        );

        console.log('\n✏️  ATUALIZAR ESTOQUE\n');
        lista.rows.forEach(item => {
            console.log(`[${item.id}] ${item.nome} — Estoque atual: ${item.estoque}`);
        });

        console.log('');
        const id          = prompt('ID do item: ');
        const novoEstoque = prompt('Novo estoque: ');

        const resultado = await client.query(
            `UPDATE itens
             SET estoque = $1
             WHERE id = $2
             RETURNING nome, estoque`,
            [novoEstoque, id]
        );

        if (resultado.rows.length === 0) {
            console.log('❌ Item não encontrado. Verifique o ID.');
        } else {
            console.log(`\n✅ Estoque atualizado!`);
            console.log(`   ${resultado.rows[0].nome}: ${resultado.rows[0].estoque} unidades`);
        }

    } catch (erro) {

        console.log('❌ Erro ao atualizar estoque:', erro.message);

    } finally {

        await client.end();

    }
}

async function removerItem() {

    try {

        await client.connect();

        const lista = await client.query(
            'SELECT id, nome, tipo FROM itens ORDER BY nome'
        );

        console.log('\n🗑️  REMOVER ITEM\n');
        lista.rows.forEach(item => {
            console.log(`[${item.id}] ${item.nome} (${item.tipo})`);
        });

        console.log('');
        const id = prompt('ID do item a remover: ');

        // Busca o item antes de deletar para mostrar ao usuário
        const busca = await client.query(
            'SELECT nome FROM itens WHERE id = $1',
            [id]
        );

        if (busca.rows.length === 0) {
            console.log('❌ Item não encontrado.');
            return;
        }

        const confirmacao = prompt(
            `⚠️  Remover "${busca.rows[0].nome}"? Isso não pode ser desfeito. (s/n): `
        );

        if (confirmacao.toLowerCase() !== 's') {
            console.log('Operação cancelada.');
            return;
        }

        await client.query('DELETE FROM itens WHERE id = $1', [id]);

        console.log(`\n✅ "${busca.rows[0].nome}" removido da loja.`);

    } catch (erro) {

        console.log('❌ Erro ao remover item:', erro.message);

    } finally {

        await client.end();

    }
}

async function menu() {

    let rodando = true;

    while (rodando) {

        console.log('\n╔════════════════════════════════════════╗');
        console.log('║     ⚗️  LOJA DO ALQUIMISTA VALDRIS     ║');
        console.log('╠════════════════════════════════════════╣');
        console.log('║  1 - Ver itens da loja                 ║');
        console.log('║  2 - Cadastrar novo item               ║');
        console.log('║  3 - Atualizar estoque                 ║');
        console.log('║  4 - Remover item                      ║');
        console.log('║  0 - Fechar a loja                     ║');
        console.log('╚════════════════════════════════════════╝');

        const opcao = prompt('\nEscolha uma opção: ');

        switch (opcao) {
            case '1': await listarItens();      break;
            case '2': await cadastrarItem();    break;
            case '3': await atualizarEstoque(); break;
            case '4': await removerItem();      break;
            case '0':
                rodando = false;
                console.log('\n🧙 Até a próxima, aventureiro!\n');
                break;
            default:
                console.log('❌ Opção inválida. Tente novamente.');
        }
    }
}

menu();
