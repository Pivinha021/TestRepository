import express from 'express';

const app = express();

// Middleware de log — registra toda requisição recebida
app.use((req, res, next) => {
    const agora = new Date().toLocaleTimeString();
    console.log(`[${agora}] ${req.method} ${req.url}`);
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Página inicial');
});

app.get('/usuarios', (req, res) => {
    res.json({ usuarios: [] });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});