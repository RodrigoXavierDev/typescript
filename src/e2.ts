class Livros {
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    data_publicacao: Date;
    estoque: Number;
    constructor(titulo: string, autor: string, editora: string, categoria: string, data_publicacao: Date, estoque: Number) {
        this.titulo = titulo,
        this.autor = autor,
        this.editora = editora,
        this.categoria = categoria,
        this.data_publicacao = data_publicacao,
        this.estoque = estoque
    }
}