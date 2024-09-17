/* NOME DO BANCO DE DADOS:*/
const database = 'BD3-Lucas-Aula';


/* NOME DA COLEÇÃO DE DADOS:*/
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS:*/
use(database);

/* SELECIONA O LIVRO COM MAIOR QUE DETERMINADO NÚMERO:*/
db[collection].find(
    {valor:{$gte: 100}}
);


/* SELECIONA O LIVRO COM O VALOR MENOR QUE DETERMINADO NUMERO:*/
db[collection].find(
    {valor:{$lte: 100}}
);