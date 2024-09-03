const database = 'BD3-Lucas';
const collection = 'LIVRARIA';

use(database);

/*Altera os dados de um documento.*/
db[collection].deleteMany(
    {autor:'Isaac Asimov'}
);