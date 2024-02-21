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
}
const cliente1 = new Cliente('fulano', new Date("2000-01-01"), '77777777777', 10000, 'normal', true, '5 transações');
const controle1 = new Controle(cliente1, '10 despezas', 'normal', 'em dia com as despezas', 3400);
const pagamento1 = new Pagamento(cliente1, 'Juntar R$15000', 'economizae R$5000', 2000);
console.log(cliente1);
console.log(controle1);
console.log(pagamento1);
