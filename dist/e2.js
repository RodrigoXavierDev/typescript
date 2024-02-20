"use strict";
class Livros {
    titulo;
    autor;
    editora;
    categoria;
    data_publicacao;
    estoque;
    constructor(titulo, autor, editora, categoria, data_publicacao, estoque) {
        this.titulo = titulo,
            this.autor = autor,
            this.editora = editora,
            this.categoria = categoria,
            this.data_publicacao = data_publicacao,
            this.estoque = estoque;
    }
}
