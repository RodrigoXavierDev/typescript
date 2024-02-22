"use strict";
class Pessoa {
    nome;
    email;
    telefone;
    data_nascimento;
    endereco;
    cpf;
    genero;
    constructor(nome, email, telefone, data_nascimento, endereco, cpf, genero) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.cpf = cpf;
        this.genero = genero;
    }
    mostrarDados() {
        console.log(`nome do funcionario: ${this.nome}`);
        console.log(`email: ${this.email}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`Data de nascimento: ${this.data_nascimento}`);
        console.log(`Endereco: ${this.endereco}`);
        console.log(`CPF: ${this.cpf}`);
        if (this.genero) {
            console.log(`genero: ${this.genero}`);
        }
        console.log(`___________________________________________`);
    }
}
class Funcionario extends Pessoa {
    cargo;
    matricula;
    constructor(nome, email, telefone, cargo, data_nascimento, endereco, cpf, genero, matricula) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    mostrarDados() {
        console.log(`nome do funcionario: ${this.nome}`);
        console.log(`email: ${this.email}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`cargo: ${this.cargo}`);
        console.log(`Data de nascimento: ${this.data_nascimento}`);
        console.log(`___________________________________________`);
    }
}
class Paciente extends Pessoa {
    sintomas;
    constructor(nome, email, telefone, data_nascimento, endereco, cpf, genero, sintomas) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
        this.sintomas = sintomas;
    }
    mostrarDados() {
        console.log(`nome do paciente: ${this.nome}`);
        console.log(`telefone do paciente: ${this.telefone}`);
        console.log(`sintomas: ${this.sintomas}`);
        console.log(`cpf: ${this.cpf}`);
        console.log(`data de nascmento: ${this.data_nascimento}`);
        if (this.genero) {
            console.log(`genero: ${this.genero}`);
        }
        console.log(`___________________________________________`);
    }
}
class Consulta {
    hospital;
    localicacao;
    medico;
    paciente;
    data;
    convenio;
    constructor(hospital, localicacao, medico, paciente, data, convenio) {
        this.hospital = hospital,
            this.localicacao = localicacao,
            this.medico = medico,
            this.paciente = paciente,
            this.data = data,
            this.convenio = convenio;
    }
    mostraDados() {
        console.log(`Hospital da consulta: ${this.hospital}`);
        console.log(`Local do hospital: ${this.localicacao}`);
        console.log(`Medico resposavel: ${this.medico}`);
        console.log(`Paciente atendido: ${this.paciente}`);
        console.log(`Data do atendimento: ${this.data}`);
        console.log(`Paciente com convenio? ${this.convenio}`);
    }
}
