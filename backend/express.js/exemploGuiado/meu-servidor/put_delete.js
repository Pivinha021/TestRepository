// Atualizar um recurso
app.put('/usuarios/:id', (req, res) => {

    const { id } = req.params;
    const { nome, email } = req.body;

    res.json({
        mensagem: `Usuário ${id} atualizado`,
        dados: { nome, email }
    });

});

// Remover um recurso
app.delete('/usuarios/:id', (req, res) => {

    const { id } = req.params;

    res.json({ mensagem: `Usuário ${id} removido` });

});