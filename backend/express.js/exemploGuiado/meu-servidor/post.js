import express from 'express';

const app = express();

app.use(express.json()); // habilita leitura do body

app.get('/usuarios', (req, res) => {

});

app.post('/usuarios', (req, res) => {

    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }

    res.status(201).json({
        mensagem: 'Usuário recebido com sucesso',
        dados: { nome, email }
    });

});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});