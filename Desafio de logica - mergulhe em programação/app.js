/*Aula 01:


let numeroSecreto = gerarNumeroSecreto();

function exibirTextoNaTela(tag, texto) {
    let campo = documet.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100");

function verificarChute() {
    let chute =  document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}

function gerarNumero() {
    return  parseInt(Math.random() * 10 + 1);
}
*/



/*
//Desafio 01:
//1
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

//2
let clicado = "clicado";
function verificarChute() {
    console.log("clicado");    
    alert(clicado);
}
    
//3
function verificarChute() {
    alert("Amo js");
}

//4 
function verificarChute() {
    let cidade = prompt("Digite um nome de uma cidade: ");
    alert(`Estive em ${cidade} lembrei de você`)
} 

//5
function verificarChute() {
    let numeroInteiro = parseInt(prompt("Insira um número: "));
    let numeroInteiro2 = parseInt(prompt("Insira outro número: "));
    let resultado = numeroInteiro + numeroInteiro2; 
    alert("Resultado é " + resultado);
}
*/


/*Aula 02:
Desafio 02:
//1
function verificarChute() {
    console.log("ola, mundo");
}

//2
function verificarChute() {
    let nome = prompt("Digite um nome de uma cidade: ");
    console.log(`Olá ${nome} lembrei de você`);
}
exibirNaTela();


//3
function verificarChute() { 
    let n =  document.querySelector("input").value;
    let resultado = n * 2;
    console.log(resultado);
}

//4
function verificarChute(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
let media = verificarChute(10, 10, 10);
console.log(media);

//5
function verificarChute(n1, n2) {
    let maior = n1 < n2 ?  console.log(n2) : console.log(n1);
}
verificarChute(1,2);




//6
function retornarNumero(n) {
    let resultado = n * n;
    console.log(resultado);
}
retornarNumero(5);
*/

/*
Aula 03:
Desafio 03:
*/

//1
function numeroImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

//2
function fatorial(numero) {
  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return `O fatorial de ${numero} é ${resultado}`;
}

//3
function converterParaReal(valorDolar) {
  let cotacao = 4.80;
  let valorEmReais = valorDolar * cotacao;

  return `U$${valorDolar} = R$${valorEmReais.toFixed(2)}`;
}

//4
function salaRetangular(largura, altura) {
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);

  console.log(`Área da sala: ${area} m²`);
  console.log(`Perímetro da sala: ${perimetro} m`);
}

//5
function salaCircular(raio) {
  let pi = 3.14;
  let area = pi * raio * raio;
  let perimetro = 2 * pi * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} m²`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} m`);
}

//6
function mostrarTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

/*
Aula 04:
Desafio 04:
*/

//1
let listaGenerica = [];

//2
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//4
let nomes1 = ['Ana', 'Bruno', 'Carlos'];
console.log(nomes1[0]);

//5
let nomes2 = ['Diana', 'Eduardo', 'Fernanda'];
console.log(nomes2[1]);
//6
let nomes3 = ['Guilherme', 'Helena', 'Isabela'];
console.log(nomes3[nomes3.length - 1]); 
