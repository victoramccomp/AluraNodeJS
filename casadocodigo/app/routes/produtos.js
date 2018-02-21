module.exports = function(app) {

    app.get('/produtos', function(request, response) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(error, result) {
            response.render('produtos/lista', { produtos: result });
        })

        connection.end();
    });


    app.get('produtos/remove', function() {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);
        
        var produto = produtosBanco.carrega(id, callback);

        if(produto) {

            produtosBanco.remove(connection, produto, callback);
        }
    })
}