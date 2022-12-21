"use strict";
let x = 10;
x = 12;
console.log(x);
//inferenai x annotation
const y = 12;
//tipos
let firstName = "Charles";
let age = 29;
const isAdmin = true;
//String != string
//Object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
//tuplas
let myTuple;
myTuple = [5, "Teste", ["a", "b"]];
//Objects literals -> {prop: value}
const user = {
    name: "Charles",
    age: 29,
};
console.log(user.name, user.age);
//Any
let a = 0;
a = "teste";
console.log(a);
a = true;
console.log(a);
a = [];
console.log(a);
//Union Types
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
//Enum
//Tamanho de roupas
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa",
    size: Size.G,
};
//Literal types
let teste;
//teste: "outrovalor";
teste = "autenticado";
teste = null;
//Funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Charles"));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Charles");
greeting("Charles", "Sir");
