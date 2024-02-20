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
}
const funcionario1 = new Funcionario('Fulano', 'fulano@gmail.com', '84999999999', 'medico', new Date("2023-02-20"));
console.log(funcionario1);
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
}
const paciente1 = new Paciente('silcrano', '84987654321', 'tosse', '18', '77777777777', new Date("2023-02-20"));
console.log(paciente1);
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
}
const consulta1 = new Consulta('Hospital das dores', 'Rua das curas', 'Fulano', 'Silcrano', new Date("2023-02-20"), true);
console.log(consulta1);
