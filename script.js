const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis aprender como usar a IA para facilitar seu dia a dia."
            }
        ]
    },
    {
        enunciado: "A professora pede um trabalho sobre Inteligência Artificial. O que você faz?",
        alternativas: [
            {
                texto: "Usa IA para pesquisar e entender o conteúdo.",
                afirmacao: "Aprendeu a usar a IA como ferramenta de apoio aos estudos."
            },
            {
                texto: "Pesquisa sozinho em livros e na internet.",
                afirmacao: "Preferiu desenvolver sua própria pesquisa e pensamento crítico."
            }
        ]
    },
    {
        enunciado: "No debate sobre o futuro do trabalho, qual sua opinião?",
        alternativas: [
            {
                texto: "A IA criará novas oportunidades.",
                afirmacao: "Acreditou que novas profissões surgirão com a tecnologia."
            },
            {
                texto: "A IA pode substituir muitas pessoas.",
                afirmacao: "Defendeu que é preciso proteger os trabalhadores."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem. O que escolhe?",
        alternativas: [
            {
                texto: "Desenha utilizando um programa como Paint.",
                afirmacao: "Preferiu produzir tudo manualmente."
            },
            {
                texto: "Usa um gerador de imagens por IA.",
                afirmacao: "Descobriu novas possibilidades criativas usando IA."
            }
        ]
    },
    {
        enunciado: "Um colega entrega um trabalho totalmente produzido por IA. O que você faz?",
        alternativas: [
            {
                texto: "Entrega assim mesmo.",
                afirmacao: "Entendeu depois que confiar totalmente na IA pode causar problemas."
            },
            {
                texto: "Revisa e melhora o texto.",
                afirmacao: "Aprendeu que a IA é uma ferramenta, mas o pensamento humano continua essencial."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {

    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas(){

    for(const opcao of perguntaAtual.alternativas){

        const botao = document.createElement("button");

        botao.textContent = opcao.texto;

        botao.addEventListener("click",()=>respostaSelecionada(opcao));

        caixaAlternativas.appendChild(botao);

    }

}

function respostaSelecionada(opcaoSelecionada){

    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();

}

function mostraResultado(){

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

}

mostraPergunta();