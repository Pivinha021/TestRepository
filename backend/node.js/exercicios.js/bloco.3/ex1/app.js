import pg from 'pg';
const { Client } = pg;

const client = new Client({
    host:     'localhost',  // onde o banco está rodando
    port:     5432,         // porta padrão do PostgreSQL
    user:     'postgres',   // usuário do banco
    password: 'postgres',  // a mesma senha que você usa no pgAdmin
    database: 'escola_db' // o banco que criamos agora pouco
});

async function listarAlunos(){
    try{
        await client.connect();

        const totalAlunos = await client.query('SELECT COUNT(*) AS total FROM alunos');
        console.log("Total de alunos:", totalAlunos.rows[0].total);
        const mediaAlunos = await client.query('SELECT AVG(nota) AS media FROM alunos');
        console.log("Media geral turma:", mediaAlunos.rows[0].media);
    }
    catch(erro){
        console.log("ERRO...", erro);
    }
    finally{
        await client.end();
        console.log("Desconectando...");
    }
}

listarAlunos();