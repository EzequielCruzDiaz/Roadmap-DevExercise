function mapeo(arr: number[], fn: (value: number, index: number) => number): number[] {
    return arr.map((value, index) => fn(value, index));
}

const arr = [1, 2, 3, 4];
const fn = (x: number, i: number) => x * i;
const result = mapeo(arr, fn);
console.log(result);

// //================================================================== CLASE 1==================================================================

// // POO
// // Paradigma 
// // Instancia -> copia independiente de una clase

// // tipos -> number, string, boolean

// // Class -> plantilla o Molder -> tipos 
// // atributos -> variables, constantes, collecciones, objetos
// // comportamientoss ->  metodos
// // Objeto -> insstancia de una clase
// // this
// // private protected public

// class Animal {
//     nombre?: string;
//     raza?: string;

//     constructor(nombre?: string, raza?: string) {
//         this.nombre = nombre;
//         this.raza = raza;
//     }

//     comer() {
//         console.log('comiendo...')
//     }

//     dormir() {
//         console.log('zzZzz...')
//     }

//     presentarse() {
//         return `hola mi nombre es ${this.nombre}`;
//     }
// }

// // let nombre = 'pepe'
// // let nombre2 = nombre
// // nombre2 = 'juana'

// // // console.log(nombre, nombre2)

// // // paso por valor -> string, number, boolean
// // // paso por referencia -> Objects

// // const perro = new Animal('pepe');
// // perro.raza = 'Perro';
// // perro.nombre = 'Boby';

// // const perro2 = perro;
// // perro2.raza = 'Perro';
// // perro2.nombre = 'Boby cruz';

// // console.log(perro.presentarse(), perro2.presentarse());

// // const gato = new Animal('Sebastian');
// // gato.raza = 'Gato';
// // gato.nombre = 'Sebastian';
// // console.log(gato.presentarse());

// // const animales1: Animal[] = [];
// // const animales2: Array<Animal> = [];

// // animales1.push(gato);
// // animales1.push(perro);

// // animales1.forEach((a) => console.log(a.nombre));

// // const animales3 = animales1.map((animal) => animal);

// // const p = 'pepe'

// // imprimir(gato)

// // function imprimir(valor: Animal) {
// //     console.log(valor.presentarse())
// // }

// // herencia -> especializar > extender

// interface MortalBase {
// }


// class Mortal {
//     nombre?: string;
//     especie?: string;
//     nivelDePoder?: number;
//     puntosDeVida = 0;

//     atacar() {
//         console.log('atacando')
//     }

//     volar() { }

//     morir() {
//         this.puntosDeVida = 0;
//         console.log('muriendo...')
//     }
// }

// class Sayayin extends Mortal implements MortalBase {
//     senkai = false;
//     multiplicadorDelSenkai = 2;

//     constructor() {
//         super()
//         this.nombre = ''
//     }

//     multiplicadorDePoderPorSenkai() {
//         if (this.senkai) {
//             this.nivelDePoder = this.nivelDePoder! * this.multiplicadorDelSenkai
//         }
//     }
// }


// class Humano extends Mortal {

// }

// //solid -> l

// let vegeta: Mortal = new Sayayin();

// (vegeta as Sayayin).multiplicadorDePoderPorSenkai()



// let goku: MortalBase = new Sayayin();

// Number.parseInt('23') // parse casting

//================================================================== CLASE 2==================================================================

// POO
// Paradigma 
// Instancia -> copia independiente de una clase

// tipos -> number, string, boolean

// Class -> plantilla o Molder -> tipos 
// atributos -> variables, constantes, collecciones, objetos
// comportamientoss ->  metodos
// Objeto -> insstancia de una clase
// this
// private protected public

// class Animal {
//     nombre?: string;
//     raza?: string;

//     constructor(nombre?: string, raza?: string) {
//         this.nombre = nombre;
//         this.raza = raza;
//         this.dormir()
//     }

//     comer() {
//         console.log('comiendo...')
//     }

//     dormir() {
//         console.log('zzZzz...')
//     }

//     presentarse() {
//         return `hola mi nombre es ${this.nombre}`;
//     }
// }

// const perro = new Animal('pepe');
// perro.raza = 'Perro';
// perro.nombre = 'Boby';
// console.log(perro.presentarse());

// const gato = new Animal('Sebastian');
// gato.raza = 'Gato';
// gato.nombre = 'Sebastian';
// console.log(gato.presentarse());

// const animales1: Animal[] = [];
// const animales2: Array<Animal> = [];

// animales1.push(gato);
// animales1.push(perro);

// animales1.forEach((a) => console.log(a.nombre));

// const animales3 = animales1.map((animal) => animal);