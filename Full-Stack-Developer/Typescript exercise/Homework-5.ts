//Practica 5 - Practica Con Funciones
//1) Crear un programa para un inventario ( de 1 solo producto ) debe tener las opciones:
//1 - vender - esto reduce el inventario e imprime un mensaje con la venta
//2 - reabastecer - esto aumenta el inventario e imprime un mensaje con el nuevo valor del inventario
//3 - consultar inventario

let producto = " Chocolate "
let inventario = 5

function vender(cantidad:number){
    if (cantidad > 0 && cantidad <= inventario){
        console.log(`Se han vendido ${cantidad}${producto} satisfactoriamente.`)
    inventario -= cantidad;
    }else{
        console.log('No hay suficiente productos en el Stock')
    }
}

function reabastecer(cantidad:number){
    if (cantidad > 0 ){
        inventario += cantidad;
        console.log(`Producto añadido satisfactoriamente,`)
    }
}

function consultar_inventario(){
    console.log(`El inventario actual es ${producto}:${inventario}`)
}


vender(2)
reabastecer(5)
consultar_inventario()

// 2) Escribir un programa que pida al usuario una palabra y muestre por pantalla si es un palíndromo


const palabra:string | null =  prompt("introduzca una palabra ")

const palindromo = ( palabra:string | null) => {
 if (palabra == null){
    return `${palabra} No es una palabra, Favor una palabra valida`
 }

const palabra_1:string = palabra.split('').reverse().join('');

if ( palabra_1 === palabra) {
    return `${palabra}-${palabra_1} es un palindromo`
}
else{
    return ` ${palabra}-${palabra_1} No es un palindromo`
}
}

console.log(palindromo(palabra))