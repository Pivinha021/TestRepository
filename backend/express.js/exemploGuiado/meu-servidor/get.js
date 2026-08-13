import express from 'express';

const app = express();

// Rota principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Rota sobre
app.get('/sobre', (req, res) => {
    res.send('Sobre o sistema');
});

// Rota que retorna JSON
app.get('/status', (req, res) => {
    res.json({ status: 'online', versao: '1.0' });
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Buscando usuário ${id}` });
});

app.get('/usuarios/:id/pedidos/:pedidoId', (req, res) => {
    const { id, pedidoId } = req.params;
    res.json({ usuario: id, pedido: pedidoId });
});

app.get('/produtos', (req, res) => {
    const categoria = req.query.categoria;
    const preco     = req.query.preco;

    res.json({
        filtros: { categoria, preco }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});