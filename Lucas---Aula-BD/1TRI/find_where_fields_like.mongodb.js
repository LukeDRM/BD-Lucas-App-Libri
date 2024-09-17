const database = 'BD3-Lucas-Aula';
const collection = 'LIVRARIA';

use(database);

/* TODOS OS REGISTROS DA COLEÇÃO DE DADOS */
db[collection].find (
    {"descricao":/é/i},
    {"_id": 0, "codigo":0}

)