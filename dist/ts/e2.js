"use strict";
class Livro {
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
class Usuario {
    nome;
    endereco;
    telefone;
    cpf;
    constructor(nome, endereco, telefone, cpf) {
        this.nome = nome,
            this.endereco = endereco,
            this.telefone = telefone,
            this.cpf = cpf;
    }
}
class Emprestimo {
    data_emprestimo;
    data_devolucao;
    info_usuario;
    info_livro;
    constructor(data_emprestimo, data_decolucao, info_usuario, info_livro) {
        this.data_emprestimo = data_emprestimo,
            this.data_devolucao = data_decolucao,
            this.info_usuario = info_usuario,
            this.info_livro = info_livro;
    }
}
const livro1 = new Livro('livro bom', 'fulano', 'editora boa', 'livro de terror', new Date("2005-05-05"), 50);
const usuario1 = new Usuario('silcrano', 'rua do além', '84987654321', '77777777777');
const emprestimo1 = new Emprestimo(new Date("2005-05-05"), new Date("2023-02-21"), usuario1, livro1);
console.log(livro1);
console.log(usuario1);
console.log(emprestimo1);
