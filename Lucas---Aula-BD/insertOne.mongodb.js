const database = 'BD3-Lucas';
const collection = 'LIVRARIA';

use(database);

/* INSERE UM NOVO REGISTRO NA COLEÇÃO DE DADOS */
db[collection].insertOne(
  {
    "codigo":"3",
    "titulo": "Os Robôs da Alvorada",
    "autor": "Isaac Asimov",
    "descricao": "Em meio à mais evoluída colônia humana fora da Terra, ocorre um crime sem precedentes: um robô humaniforme é assassinado, colocando em xeque a reputação de um importante estudioso daquele planeta, único suspeito do crime.",
    "imagem":"/livros/robos_alvorada.jpg",
    "valor": 115,
    "categoria":"Ficção Científica"
  },

    )