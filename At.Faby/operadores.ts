// Operadores lógicos

//Questão 1
let numero1: number = 5;
let numero2: number = 5;
if (numero1 == numero2) {
    console.log("Os números são iguais.");
} else {
    console.log("Os números são diferentes.");
}

//Questão 2
let numero1: number = 15;
let numero2: number = 10;
if (numero1 != numero2) {
    console.log("Os números são diferentes.");
} else {
    console.log("Os números são iguais.");
}

//Questão 3
let numero1: number = 15;
let numero2: number = 10;
if (numero1 > numero2) {
    console.log(`${numero1} é maior do que ${numero2}.`);
} else {
    console.log(`${numero1} não é maior do que ${numero2}.`);
}

//Questão 4
let numero1: number = 15;
let numero2: number = 10;
if (numero1 < numero2) {
    console.log(`${numero1} é menor do que ${numero2}.`);
} else {
    console.log(`${numero1} não é menor do que ${numero2}.`);
}

//Questão 5
let numero1: number = 15;
let numero2: number = 10;
if (numero1 >= numero2) {
    console.log(`${numero1} é maior ou igual a ${numero2}.`);
} else {
    console.log(`${numero1} não é maior ou igual a ${numero2}.`);
}

//Questão 6
let numero1: number = 15;
let numero2: number = 10;

if (numero1 <= numero2) {
    console.log(`${numero1} é menor ou igual a ${numero2}.`);
} else {
    console.log(`${numero1} não é menor ou igual a ${numero2}.`);
}

//Questão 7
let numero1: number = 15;
let numero2: number = 10;
if (numero1 > 0 && numero2 < 10) {
    console.log("Ambas as condições são verdadeiras.");
} else {
    console.log("Pelo menos uma das condições não é verdadeira.");
}

//Questão 8
let numero1: number = 15;
let numero2: number = 10;
if (numero1 > 0 || numero2 > 10) {
    console.log("Pelo menos uma das condições é verdadeira.");
} else {
    console.log("Nenhuma das condições é verdadeira.");
}
//Questão 9
let numero: number = 10;
if (!(numero > 5)) {
    console.log("A condição é falsa.");
} else {
    console.log("A condição é verdadeira.");
}

//Questão 10
let numero: number = 10;
let limiteInferior: number = 5;
let limiteSuperior: number = 15;
if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log(`${numero} está dentro do intervalo [${limiteInferior}, ${limiteSuperior}].`);
} else {
    console.log(`${numero} não está dentro do intervalo [${limiteInferior}, ${limiteSuperior}].`);
}

//Questão 11
let numero: number = 10;
let limiteInferior: number = 5;
let limiteSuperior: number = 15;
if (numero < limiteInferior || numero > limiteSuperior) {
    console.log(`${numero} está fora do intervalo [${limiteInferior}, ${limiteSuperior}].`);
} else {
    console.log(`${numero} está dentro do intervalo [${limiteInferior}, ${limiteSuperior}].`);
}

//Questão 12
let numero: number = 10;
if (numero > 0) {
    console.log(`${numero} é um número positivo.`);
} else if (numero == 0) {
    console.log(`${numero} é zero.`);
} else {
    console.log(`${numero} é um número negativo.`);
}

//Questão 13
let minhaString: string = "";
if (minhaString.length == 0) {
    console.log("A string está vazia.");
} else {
    console.log("A string não está vazia.");
}

//Questão 14
let minhaVariavel: any = true;
if (typeof minhaVariavel == "boolean") {
    console.log("A variável é do tipo booleano.");
} else {
    console.log("A variável não é do tipo booleano.");
}
