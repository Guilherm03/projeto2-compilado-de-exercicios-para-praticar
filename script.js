//1.Faça um Programa que mostre a mensagem "Olá mundo" na tela.

alert ("Olá mundo");

//2.Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".

let number = prompt ("Digite um número");
alert (`O número informado foi ${number}`);

//3.Faça um Programa que peça dois números e imprima a soma.

let number1 = parseInt(prompt("Digite um número:"));
let number2 = parseInt(prompt("Digite um número:"));
const soma = number1 + number2;

alert (` ${number1} + ${number2} = ${soma} `);

//4.Faça um Programa que peça as 4 notas bimestrais e mostre a média.

let nota1 = parseFloat(prompt("Digite a nota do 1° bimestre"));
let nota2 = parseFloat(prompt("Digite a nota do 2° bimestre"));
let nota3 = parseFloat(prompt("Digite a nota do 3° bimestre"));
let nota4 = parseFloat(prompt("Digite a nota do 4° bimestre"));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

alert (`A média das notas é: ${media}
 `);

//5.Faça um Programa que converta metros para centímetros.

const metros = parseFloat(prompt("Digite um número: "));
const centimetros = metros * 100;

alert (centimetros + ' cm');

//6.Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const raio = parseFloat(prompt("digite o raio do circulo"));
const area = 3.14 * raio * raio;

alert ("A área do circulo é: " + area);

//7.Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

const base = parseInt(prompt("Digite o tamanho da base: "))
const altura = parseInt(prompt("Digite o tamanho da altura: "))

alert ("O dobro da área do quadrado é: " + base * altura * 2 )

//8.Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const valorHora = parseFloat(prompt("Quanto voçê ganha por hora: "))
const horaTrabalhada = parseFloat(prompt("Quantas horas voçê trabalhou este mês: "))
const salarioTotal = valorHora * horaTrabalhada;

alert ("Seu salário este mês foi de: R$" + salarioTotal)


//9.Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).

let fahrenheit = prompt("Digite a temperatura em graus Fahrenheit:")
let celsius = 5 * ((fahrenheit-32) / 9)

alert ("A temperatura em graus Celsius é: " + celsius)

//10.Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

let celsius1 = prompt("Digite a temperatura em graus Celsius: ")
let fahrenheit1 = (9/5) * celsius1 + 32

alert ("A temperatura em graus Fahrenheit é: " + fahrenheit1)

//11.Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:

//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let numReal = parseFloat(prompt("Digite um número real: "));

let produto = (2 * num1) * (num2 / 2);
let soma1 = (3 * num1) + numReal;
let cubo = numReal * numReal * numReal;

alert (`O produto do dobro do primeiro com metade do segundo é: ${produto}
A soma do triplo do primeiro com o terceiro é: ${soma}
O terceiro número elevado ao cubo é: ${cubo}`)

//12.Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

let altura1 = parseFloat(prompt("Digite sua altura: "));
let pesoIdeal = Number(72.7*altura) - 58;

alert (`Seu peso ideal é: ${pesoIdeal}kg`);

//13.Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7

let alt = parseFloat(prompt("Digite sua altura: "));
let homens = parseInt(72.7 * alt) - 58;
let mulheres = parseInt(62.1 * alt) - 44.7;

alert(`O peso ideal para homens é: ${homens}kg.`);
alert(`O peso ideal para mulheres é: ${mulheres}kg.`);

//14.João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

let peso = parseInt(prompt("Digite o peso total dos peixes em quilos: "))
const limite = 50
const excesso = peso - limite 
const multa = excesso * 4

alert (`Voçê ira pagar ${multa} reais por quilo excessivo. `)

//15.Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

//salário bruto.
//quanto pagou ao INSS.
//quando pagou para o sindicato.
//o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
//Salário Bruto : R$
//INSS (8%) : R$
//Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.

let quantiaHora = prompt("Quanto você ganha por hora?")
let horaMes = prompt("Quantas horas você trabalha no mês?")
const salario = parseFloat(quantiaHora * horaMes)
const pagouInss = parseFloat((salario * 8) / 100)
const sindicato = parseFloat((salario * 5) / 100)
const descontos = pagouInss + sindicato
const salarLIquido = parseFloat(salario - descontos)

alert (`Seu salário bruto é de ${salario} reais;
Voçê pagou ${pagouInss} reais ao INSS;
Voçê pagou ${sindicato} reais ao sindicato;
Seu salário líquido é de ${salarLIquido} reais. 
`)