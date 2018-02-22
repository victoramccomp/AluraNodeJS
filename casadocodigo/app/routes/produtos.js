module.exports = function(app) {

    app.get('/produtos', function(request, response) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(error, result) {
            response.format({
                html: function() {
                    response.render('produtos/lista', { produtos: result });
                },
                json: function() {
                    response.json(result);
                }
            })
        })

        connection.end();
    });

    app.get('/produtos/form', function(request, response) {
        response.render('produtos/form');
    });

    app.post('/produtos', function(request, response) {

        var produto = request.body;
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salvar(produto, function(error, result) {
            response.redirect('/produtos');
        })
    });
}