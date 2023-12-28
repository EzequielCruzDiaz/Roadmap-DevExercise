/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */



const anagrama = (palabra1: string, palabra2: string) => {
    const Rpalabra1 = palabra1.toLowerCase().split("");
    const Rpalabra2 = palabra2.toLowerCase().split("");

    Rpalabra1.sort();
    Rpalabra2.sort();

    return Rpalabra1.join("") === Rpalabra2.join("")

}

const palabra1 = "Listen"
const palabra2 = 'Silent'

console.log(anagrama(palabra1, palabra2))