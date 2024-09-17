const database = 'BD3-Lucas-Aula';
const collection = 'LIVRARIA';

use(database);

/*Altera os dados de um documento.*/
db[collection].updateOne(
    {titulo:'Os Robôs da Alvorada'},
    {$set:{Valor:' 250'}}
);

    