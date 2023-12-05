//Practica 4 - Función para calcular la pendiente de una recta
const Cal_pendiente  = (p1:{x:number, y:number}, p2:{x:number, y:number}) => {
  return (p2.y - p1.x) / (p1.x - p2.y);

}
const punto1 = {x:2, y:6 }
const punto2 = {x:5, y:1}
 
const pendiente = Cal_pendiente(punto1,punto2);
console.log(`la pendiente entre los puntos (${punto1.x},${punto1.y}) y (${punto2.x},${punto2.y}) es ${pendiente}`); 

