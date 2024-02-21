"use strict";
class Funcionario {
    nome;
    email;
    telefone;
    cargo;
    data_nascimento;
    constructor(nome, email, telefone, cargo, data_nascimento) {
        this.nome = nome,
            this.email = email,
            this.telefone = telefone,
            this.cargo = cargo,
            this.data_nascimento = data_nascimento;
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
class Paciente {
    nome;
    telefone;
    sintomas;
    idade;
    cpf;
    data_nascimento;
    constructor(nome, telefone, sintomas, idade, cpf, data_nascimento) {
        this.nome = nome,
            this.telefone = telefone,
            this.sintomas = sintomas,
            this.idade = idade,
            this.cpf = cpf,
            this.data_nascimento = data_nascimento;
    }
    mostrarDados() {
        console.log(`nome do paciente: ${this.nome}`);
        console.log(`telefone do paciente: ${this.telefone}`);
        console.log(`sintomas: ${this.sintomas}`);
        console.log(`idade: ${this.idade}`);
        console.log(`cpf: ${this.cpf}`);
        console.log(`data de nascmento: ${this.data_nascimento}`);
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
const funcionario1 = new Funcionario('Fulano', 'fulano@gmail.com', '84999999999', 'medico', new Date("2023-02-20"));
const paciente1 = new Paciente('silcrano', '84987654321', 'tosse', '18', '77777777777', new Date("2023-02-20"));
const consulta1 = new Consulta('Hospital das dores', 'Rua das curas', funcionario1, paciente1, new Date("2023-02-20"), true);
console.log(paciente1.mostrarDados());
console.log(funcionario1.mostrarDados);
console.log(consulta1.mostraDados());
