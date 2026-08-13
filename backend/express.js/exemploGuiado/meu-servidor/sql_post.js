import express from 'express';
import pkg from 'pg';
const { Client } = pkg;

const app = express();
app.use(express.json());
app.use(express.static('public'));

function criarCliente() {
    return new Client({
        host:     'localhost',
        port:     5432,
        user:     'postgres',
        password: 'sua_senha',
        database: 'loja_db'
    });
}

app.post('/api/produtos', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { nome, preco, estoque, categoria_id } = req.body;

        if (!nome || !preco || !categoria_id) {
            return res.status(400).json({
                erro: 'Nome, preço e categoria são obrigatórios'
            });
        }

        const resultado = await client.query(`
            INSERT INTO produtos (nome, preco, estoque, categoria_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `, [nome, preco, estoque || 0, categoria_id]);

        res.status(201).json(resultado.rows[0]);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});