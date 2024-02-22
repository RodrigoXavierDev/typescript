"use strict";
class Cliente {
    nome;
    data_nascimento;
    cpf;
    saldo;
    tipo_conta;
    titularidade;
    historico;
    constructor(nome, data_nascimento, cpf, saldo, tipo_conta, titularidade, historico) {
        this.nome = nome,
            this.data_nascimento = data_nascimento,
            this.cpf = cpf,
            this.saldo = saldo,
            this.tipo_conta = tipo_conta,
            this.titularidade = titularidade,
            this.historico = historico;
    }
    mostrarDados() {
        console.log(`Nome do cliente: ${this.nome}`);
        console.log(`Data de nacimento: ${this.data_nascimento}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Saldo: ${this.saldo}`);
        console.log(`Tipo de conta: ${this.tipo_conta}`);
        console.log(`Titular da conta: ${this.titularidade}`);
        console.log(`Historico: ${this.historico}`);
    }
}
class Controle {
    cliente;
    registro_despesa;
    categoria;
    analise;
    relatorio;
    constructor(cliente, registro_despesa, categoria, analise, relatorio) {
        this.cliente = cliente;
        this.registro_despesa = registro_despesa,
            this.categoria = categoria,
            this.analise = analise,
            this.relatorio = relatorio;
    }
    mostrarDados() {
        console.log(`Nome do cliente: ${this.cliente}`);
        console.log(`Registro de despesas: ${this.registro_despesa}`);
        console.log(`Categoria da conta: ${this.categoria}`);
        console.log(`analise: ${this.analise}`);
        console.log(`Relatorio: ${this.relatorio}`);
    }
}
class Pagamento {
    cliente;
    meta;
    economizar;
    dividas;
    constructor(cliente, meta, economizar, dividas) {
        this.cliente = cliente,
            this.meta = meta,
            this.economizar = economizar,
            this.dividas = dividas;
    }
    mostrarDados() {
        console.log(`Nome do cliente: ${this.cliente}`);
        console.log(`Metas: ${this.meta}`);
        console.log(`Economizar: ${this.economizar}`);
        console.log(`Dividas: ${this.dividas}`);
    }
}
const cliente1 = new Cliente('fulano', new Date("2000-01-01"), '77777777777', 10000, 'normal', true, '5 transações');
const controle1 = new Controle(cliente1, '10 despezas', 'normal', 'em dia com as despezas', 3400);
const pagamento1 = new Pagamento(cliente1, 'Juntar R$15000', 'economizae R$5000', 2000);
console.log(cliente1.mostrarDados());
console.log(controle1.mostrarDados());
console.log(pagamento1.mostrarDados());
