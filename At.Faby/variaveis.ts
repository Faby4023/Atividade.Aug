//Tipos de variáveis

//Questão 1
let variavelNull: any = null;

//Questão 2
let variavelNull: any

//Questão 3
let variavelNull: any = null;
if (variavelNull === null) {
    console.log("variavelNull é igual a null");
} else {
    console.log("variavelNull não é igual a null");
}

//Questão 4
let variavelUndefined: any;
if (variavelUndefined === undefined) {
    console.log("variavelUndefined é igual a undefined");
} else {
    console.log("variavelUndefined não é igual a undefined");
}

//Questão 5
let objeto: { nome?: string } = {};
objeto.nome = undefined;
console.log(objeto.nome);