//Array

//Questão 1
let numeros: number[] = [];

//Questão 2
let numeros: number[] = [];
numeros.push(1);
numeros.push(2);
numeros.push(3);
numeros.push(4);
console.log(numeros);

//Questão 3
let numeros: number[] = [10, 20, 30, 40];
let segundoElemento: number = numeros[1];
console.log(segundoElemento);

//Questão 4
let numeros: number[] = [1, 2, 3, 4];
numeros[2] = 10;
console.log(numeros)

//Questão 5
let numeros: number[] = [1, 2, 3, 4];
numeros.pop();
console.log(numeros);

//Questão 6
let numeros: number[] = [1, 2, 3, 4];
let comprimento = numeros.length;
console.log(comprimento);

//Questão 7
let frutas: string[] = ['maçã', 'banana', 'laranja'];
console.log(frutas);

//Questão 8
let frutas: string[] = ['maçã', 'banana', 'laranja'];
let primeiroElemento = frutas[0];
console.log(primeiroElemento);

//Questão 9
let frutas: string[] = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log(frutas);

//Questão 10
interface Aluno {
    nome: string;
    idade: number;
}
let aluno: Aluno = {
    nome: 'Fabyanna',
    idade: 41 
};
let alunos: Aluno[] = [];
alunos.push(aluno);
console.log(alunos);

//Questão 11
interface Aluno {
    nome: string;
    idade: number;
}
let alunos: Aluno[] = [
    { nome: 'Fabyanna', idade: 41 },
    { nome: 'Pedro', idade: 19 }
];

let primeiroNome = alunos[0].nome;
console.log(primeiroNome); 

//Questão 12
interface Aluno {
    nome: string;
    idade: number;
}

let alunos: Aluno[] = [
    { nome: 'Fabyanna', idade: 41 },
    { nome: 'Pedro', idade: 19 },
];
alunos.push(
    { nome: 'Ana', idade: 46 },
    { nome: 'Carol', idade: 35 },
    { nome: 'Jackeline', idade: 45 }
);
console.log(alunos);

//Questão 13

let produtos: string[] = [
    'Arroz',
    'Feijão',
    'Macarrão',
    'Açúcar',
    'Fuba',
    'Creme de leite',
    'Manteiga',
    'Café',
    'Leite em pó',
    'Farinha de trigo'
];
for (let i = 0; i < produtos.length; i++) {
    if (i % 2 === 0) {
        console.log(produtos[i]);
    }
}

