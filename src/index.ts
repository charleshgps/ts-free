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

//interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};

console.log(multiplyNumbers(someNumbers));

//Narrowing
//checagem de tipos

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  }
  console.log("Não foi passado numero");
}

doSomething(5);
doSomething(true);

//Generics

function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

//classe
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }
  showUserName() {
    console.log(`O nome do usuario é ${this.name}`);
  }
  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`O nome do usuario é ${this.role}`);
      return;
    }
    console.log("Informação restrita");
  }
}

const charles = new User("Charles", "Admin", true);
console.log(charles);
charles.showUserName();
charles.showUserRole(false);

//interfaces em classes

interface Iveichle {
  brand: string;
  showBrands(): void;
}
class Car implements Iveichle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrands(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);
fusca.showBrands();

//herança

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrands();

//Decorators
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createAt = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);
