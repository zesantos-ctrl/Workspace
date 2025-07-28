/*
aula 01:

*/
alert("Boa vindas, ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    //se chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        break;

    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : ' tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai acertou o número secretooo! ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`)
// }








/*

Desafio 01:
alert("Erro! Preencha todos os campos");
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro!Preencha todos os campos';
alert('mensagemDeErro');

let nome = 'Lua';

let nomeUsuario = prompt('Digite seu nome:');
if (nome == nomeUsuario) {
    alert('Lua');
};

let idade = 18;

let idadeUsuario = prompt('Digite sua idade:');
if (idadeUsuario >= 18) {
    alert('Pode tirar a habilitação');
} else {
    alert('Não pode tirar a habilitação');
};

*/

/*============================================================================================================*/

/* aula02:*/
/*
Desafio02:

//dias da semana:

let diaDaSemana = prompt("Qual o dia da semana?");
if (diaDaSemana == 'sabado' || diaDaSemana == 'domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
};
 
//Negativo e Positivo:
// let numero = prompt('Digite seu número:');
// if (numero > 0) {
//     alert('positivo');
// } else {
//     alert('negativo');
// };


//pontuação:
// let pontuação = prompt('sua pontuação:');

// if (pontuação >= 100) {
//     alert('Parabéns, você venceu');
// } else {
//     alert('Tente novamente para ganhar');
// };

//saldo:

// let saldo = 200;
// let seuSaldo = prompt('Digite sua senha:');
//     alert(`seu saldo: ${saldo}`);




//nome: 

let nome = prompt('Digite eu nome:');
alert('seja bem vindo!' + nome);
*/

/*============================================================================================================*/

/*
Aula 03:
Desafio03:

   //0 => 10
   let contador = 1;
   while (contador <= 10) {
       console.log(contador);
       contador++;
   };
       //10 => 0 
   let contador2 = 10;
   while (contador2 >= 0) {
       console.log(contador2);
       contador2--;   
   };
   
       //Regressivo 6 => 0
   let contador3 = 6;
   contador = prompt("De 6 ate 0:");
   while (contador3 >= 0) {
       alert(contador3);
       contador3--;
   };
   
       //Progressivo 0 => 6
   let contador4 = 0;
   contador4 = prompt("de 0 ate 6:");
   while (contador4 <= 6 ) {
       alert(contador4);
        contador4++;     
   };
   */

/*========================================================================================================*/

/* 
Aula 04:
desafios04:

//1
console.log("Olá, seja bem-vindo :)");

//2
let nome = "Zé";
console.log("Olá, " + nome + "!");

//3
let nome2 = "Zé";
alert("Olá, " + nome2 + "!");

//4
let linguagem = prompt("Linguagem que gosta");
console.log("Você gosta: " + linguagem);

//5
let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log("A soma  " + valor1 + " e " + valor2 + " é igual a " + resultado);

//6
let numero1 = 20;
let numero2 = 30;
let resultado2 = numero1 - numero2;
console.log("A diferença entre " + numero1 + " e " + numero2 + " é igual a " + resultado2);

//7 
let idade = prompt("Qual a idade: ");
// if (idade >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// };
        //operador ternário
let idadeUsuario = idade  > 18 ?  console.log("Maior de idade") : console.log("Menor de idade");

//8
let numero3 = prompt("Digite um numero: ");
numero3 = Number(numero3);
if (numero3 > 0) {
    console.log("Numero positivo");
} else if (numero3 < 0) {
    console.log("Numero negativo");
} else {
    console.log("Zero");
};
//9
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
};

//10
let nota = 6;
if (nota >= 7) {
    console.log("Você foi aprovado!! :)");
} else {
    console.log("Você foi reprovado :(");
};

//11
let aleatorio = Math.random();
console.log("Número aleatório: ", aleatorio);

//12 
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Numero de 1 a 10 ", numeroAleatorio);

//13
let numeroAleatorio2 = Math.floor(Math.random() * 1000) + 1;
console.log("Numero de 1 a 1000 ", numeroAleatorio2);
*/
/*======================================================================================================*/





