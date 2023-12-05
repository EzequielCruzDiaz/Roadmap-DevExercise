type tiempo = | 'semanal' | 'quincenal' | 'mensual';

function calcularSueldoDiario(sueldoMensual: number, periodo: tiempo): number {
  switch (periodo) {
    case 'semanal':
      return sueldoMensual / 5.5;
    case 'quincenal':
      return sueldoMensual / 11.91;
    case 'mensual':
      return sueldoMensual / 23.83;
  }
}

function calcularCesantia(sueldoMensual: number, tiempoTrabajoAnios: number): number {
  const sueldoDiario = calcularSueldoDiario(sueldoMensual, "mensual");
  const diasCesantiaPorAnio = 21;

  return sueldoDiario * diasCesantiaPorAnio * tiempoTrabajoAnios ;
}

function calcularVacaciones(sueldoMensual: number): number {
  const sueldoDiario = calcularSueldoDiario(sueldoMensual, 'mensual');
  const diasVacacionesPorMes = 14;

  return sueldoDiario * diasVacacionesPorMes * tiempoTrabajoAnios;
}

function calcularPreaviso(sueldoMensual: number, tiempoTrabajoAnios:number): number {
  const sueldoDiario = calcularSueldoDiario(sueldoMensual, 'mensual');
  const diaspreavisados = 28;

  return sueldoDiario  * diaspreavisados;
}

function calcularSueldoNavidad(sueldoMensual: number): number {
  const mesesTrabajo = 12;
  return sueldoMensual * mesesTrabajo / 12 ;
}

const nombre = prompt("introduce tu nombre:")
const sueldoMensual = 10000;
const tiempoTrabajoAnios = 1;

const cesantia = calcularCesantia(sueldoMensual, tiempoTrabajoAnios);
const vacaciones = calcularVacaciones(sueldoMensual);
const preaviso = calcularPreaviso(sueldoMensual, tiempoTrabajoAnios);
const sueldoNavidad = calcularSueldoNavidad(sueldoMensual);

const montototal:number = cesantia + vacaciones + preaviso + sueldoNavidad;

console.log(`Prestaciones laborales del empleado: ${nombre} Salario:${sueldoMensual}`)
console.log(`Cesantía: ${Math.round(cesantia)} DOP`);
console.log(`Vacaciones: ${Math.round(vacaciones)} DOP`);
console.log(`Preaviso: ${Math.round(preaviso)} DOP`);
console.log(`Sueldo de Navidad: ${Math.round(sueldoNavidad)} DOP`);
console.log(`Monto total a recibir ${Math.round(montototal)} DOP`);