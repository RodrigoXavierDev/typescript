class Projeto {
    status: string;
    para_começar: string;
    nome: string;
    descricao: string;
    marco: string;
    prazo: Date;
    constructor(status: string, para_começar: string, nome: string, descricao: string, marco: string, prazo: Date) {
        this.status = status,
        this.para_começar = para_começar,
        this.nome = nome,
        this.descricao = descricao,
        this.marco = marco,
        this.prazo = prazo
    }
    mostrarDados(){
        console.log(`Status${this.status}`)
        console.log(`Projeto para começar: ${this.para_começar}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Marco: ${this.marco}`)
        console.log(`Prazo de entrega: ${this.prazo}`)
    }
}

class Tarefa {
    individual: string;
    coletiva: string;
    membros: number;
    responsavel: string;
    status: string;
    entrega: Date;
    constructor(individual: string, coletiva: string, membros: number, responsavel: string, status: string, entrega: Date) {
        this.individual = individual,
        this.coletiva = coletiva,
        this.membros = membros,
        this.responsavel = responsavel,
        this.status = status,
        this.entrega = entrega
    }
    mostrarDados(){
        console.log(`Tarefa individual: ${this.individual}`)
        console.log(`Tarefa coletiva: ${this.coletiva}`)
        console.log(`Membros: ${this.membros}`)
        console.log(`Responsavel pelo projeto: ${this.responsavel}`)
        console.log(`Status: ${this.status}`)
        console.log(`Entrega: ${this.entrega}`)
    }
}

class Comunicacao {
    projeto: Projeto;
    mensagem: string;
    arquivos: string;
    registro: string;
    constructor(projeto: Projeto, mensagem: string, arquivos: string, registro: string) {
        this.projeto = projeto,
        this.mensagem = mensagem,
        this.arquivos = arquivos,
        this.registro = registro
    }
    mostrarDados(){
        console.log(`Projeto: ${this.projeto}`)
        console.log(`Mensagem: ${this.mensagem}`)
        console.log(`Arquivos: ${this.arquivos}`)
        console.log(`Registro: ${this.registro}`)
    }
}

const projeto1 = new Projeto('Iniciado', 'Programa de Banco', 'Programa de Supermercado', 'Projeto para ajudar na logistica de um supermercado', 'iniciar e finalizar', new Date("2025-05-25"))
const tarefa1 = new Tarefa('nao', 'sim', 5, 'fulano', 'finalizado', new Date("2024-02-21"))
const comunicacao1 = new Comunicacao(projeto1, 'vamos começar um projeto novo', 'Projeto.pdf', 'Projeto novo')
 
console.log(projeto1.mostrarDados())
console.log(tarefa1.mostrarDados())
console.log(comunicacao1.mostrarDados())