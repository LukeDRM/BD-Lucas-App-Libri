/* NOME DO BANCO DE DADOS:*/
const database = 'BD3-Lucas';


/* NOME DA COLEÇÃO DE DADOS:*/
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS:*/
use(database);

/* CRIAR UMA COLEÇÃO DE DADOS:*/
db.createCollection(collection);