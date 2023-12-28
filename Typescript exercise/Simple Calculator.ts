

const input1: string | null = prompt("Introduce a number");
if(input1 != null){
const number1:number = parseFloat(input1)
console.log("number1:", number1) 
}else{
  console.log("Introduzca un nuemero valido");
}

 const input2:string | null = prompt("introduce a number")
 if (input2 != null){
  const number2:number = parseInt(input2) 
  console.log("number2:", number2)
 }else{
  console.log("Introduzca un numero valido")
 }

 const calculadora = (number1:number,number2:number, op:string) => {
  if (!["divided","rest","add","multiply"].includes(op)){
   return console.log('the operation not defined')
  }

 if (op === "add") return number1 + number2;
 if (op === "rest") return number1 - number2;
 if (op === 'multiply') return number1 * number2;
  
    
  if (number2 === 0 )
  return console.log("cant divided by 0 error") 
  return number1 / number2

 }

console.log(calculadora(1, 2, 'multiply'))
