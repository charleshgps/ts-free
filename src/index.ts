let x: number = 10;

x = 12;

console.log(x);

//inferenai x annotation
const y = 12;

//tipos
let firstName: string = "Charles";
let age: number = 29;
const isAdmin: boolean = true;

//String != string

//Object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());

//tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "Teste", ["a", "b"]];

//Objects literals -> {prop: value}

const user: { name: string; age: number } = {
  name: "Charles",
  age: 29,
};

console.log(user.name, user.age);

//Any
let a: any = 0;

a = "teste";
console.log(a);
a = true;
console.log(a);
a = [];
console.log(a);

//Union Types

let id: string | number = "10";
id = 200;

//Type Alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

//Enum
//Tamanho de roupas

enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa",
  size: Size.G,
};

//Literal types

let teste: "autenticado" | null;
//teste: "outrovalor";
teste = "autenticado";
teste = null;

//Funções

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(12, 12));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}
console.log(sayHelloTo("Charles"));

function logger(msg: string): void {
  console.log(msg);
}

logger("teste");

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  } else {
    console.log(`Olá ${name}`);
  }
}

greeting("Charles");
greeting("Charles", "Sir");
