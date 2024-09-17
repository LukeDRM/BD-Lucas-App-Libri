// NOME DO BANCO DE DADOS
const database = 'BD3-Lucas-Aula';


// NOME DA COLEÇÃO DE DADOS
const collection = 'LIVRARIA';

// CRIAR OU ACESSAR O BANCO DE DADOS
use(database);

// SELECIONA OS LIVROS DE UMA CATEGORIA E UM VALOR DETERMINADO
db[collection].find({
    $or:
        [{ categoria: { $eq: 'Fantasia Heroica'} },
        { valor: { $lte: 120 }}]
}

);


