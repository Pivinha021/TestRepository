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

        await client.end();

    }
}

minhaFuncao();