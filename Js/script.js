class carro {
    constructor(cor, modelo, marca) {

        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;

    }

    freiar() {
        this.mostrarhtml(`Um carro na cor ${this.cor} da fabricante ${this.marca} no modelo ${this.modelo} freio bruscamente!`);
    }

    mostrarhtml(mensagem) {
        const carro1 = document.getElementById("carro-html");
        carro1.innerHTML = mensagem;
    }
}

const carro1 = new carro("azul", "cobalt", "chevrolet");
carro1.mostrarhtml('Cor: ${this.cor}, Marca:${this.marca}, Modelo:${this.modelo}');
carro1.freiar();


class porta {
    constructor(material, cor2, altura) {

        this.material = material;
        this.cor2 = cor2;
        this.altura = altura;

    }
    abrir() {
        this.mostrarhtml(`Abre essa porta de ${this.material} na cor ${this.cor2} e com uma altura de ${this.altura}.`);
    }
    mostrarhtml(mensagem2) {
        const porta1 = document.getElementById("porta-html");
        porta1.innerHTML = mensagem2;
    }
}

const porta1 = new porta("madeira", "verde", "1.68");
porta1.mostrarhtml('Material: ${this.material}, Cor:${this.cor2}, Altura:${this.altura}');
porta1.abrir();

class amizade{
    constructor(relacionamento, confianca, emocoes){

        this.relacionamento = relacionamento;
        this.confianca = confianca;
        this.emocoes = emocoes;
        
    }
    pessoaProxima(){
        this.mostrarhtml(`Mihha melhor ${this.relacionamento} se chama júlia  e sempre conto meus ${this.confianca} a ela e nós ficamos muito ${this.emocoes} por ter sido apresentadas uma a outra.`)
    }
    mostrarhtml(mensagem3){
        const amizade1 = document.getElementById("amizade-html");
        amizade1.innerHTML = mensagem3;
    }
}   

const amizade1 = new amizade("amiga", "segredos", "felizes")
amizade1.mostrarhtml('Relacionamento:${this.relacionamento}, Confiança:${this.confianca}, Emoções:${this.emocoes}')
amizade1.pessoaProxima();

class conversar{
    constructor(pessoas, sms, emojis){

        this.pessoas = pessoas;
        this.sms = sms;
        this.emojis = emojis;
        
    }
    conversaComVizinhos(){
        this.mostrarhtml(`Na parte da tarde saio um pouco e converso com meus vizinhos ${this.pessoas} ou mando até mensagens no ${this.sms} e ${this.emojis} para se divertir.`)
    }
    mostrarhtml(mensagem3){
        const amizade1 = document.getElementById("conversar-html");
        amizade1.innerHTML = mensagem3;
    }
}   

const conversar1 = new conversar("Tiago e Vanessa", "Whatsapp", "figuras")
conversar1.mostrarhtml('Pessoas:${this.pessoas}, Mensagens:${this.sms}, Emojis:${this.emojis}')
conversar1.conversaComVizinhos();