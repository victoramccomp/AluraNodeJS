var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(configuracoes, function(response) {

    console.log(response.statusCode);

    response.on('data', function(body) {
        console.log('Corpo:' + body);
    });
});

var produto = {
    titulo: 'NOVO',
    descricao: 'NOVO DESC',
    preco: 200
}

client.end(JSON.stringify(produto));