function ProdutosDAO(connection) {

    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {

    this._connection.query('SELECT * FROM produtos', callback);
}

ProdutosDAO.prototype.salvar = function(produto, callback) {

    this._connection.query('INSERT INTO produtos set ?', produto, callback);
}

module.exports = function() {
    return ProdutosDAO;
}