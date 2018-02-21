var mysql = require('mysql');
        
function createDBConnection() {
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}

//Wrapper (Embrulha a função para não ser executada diretamente no load do express-load)
module.exports = function() {
    return createDBConnection;
}