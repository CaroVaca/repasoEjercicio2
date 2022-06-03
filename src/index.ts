// Ejercicio 2 de repaso de la clase del Lunes 30/05

let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
let minimaNota: number = 11;
let promedio: number;
let indice: number;

// se crea la funcion calcularPromedio para calcular el mismo para cada comision
function calcularPromedio(comision: number[]) {
  let sumaTotal: number = 0;
  for (indice = 0; indice < comision.length; indice++) {
    sumaTotal += comision[indice];
  }
  promedio = sumaTotal / 10;
  return promedio;
}

// funcion que me devuelve los desaprobados en la comision
function cantDesaprobadosporComision(comision: number[]): number {
  let mesesDesaprobados: number = 0;
  for (indice = 0; indice < comision.length; indice++) {
    if (comision[indice] < 6) {
      mesesDesaprobados++;
    }
  }
  return mesesDesaprobados;
}
//funcion que me devuelve la menor nota  de una comision
function menorNota(comision: number[]) {
  for (indice = 0; indice < comision.length; indice++) {
    if (comision[indice] < minimaNota) {
      minimaNota = comision[indice];
    }
  }
  return minimaNota;
}
//en el if se devuelve el mayor promedio y dice a que comision corresponde
if (
  calcularPromedio(comisionA) > calcularPromedio(comisionB) &&
  calcularPromedio(comisionA) > calcularPromedio(comisionC)
) {
  console.log(
    "El Mayor Promedio es: " +
      calcularPromedio(comisionA) +
      " correspondiente a la comisionA"
  );
} else if (
  calcularPromedio(comisionB) > calcularPromedio(comisionC) &&
  calcularPromedio(comisionB) > calcularPromedio(comisionC)
) {
  console.log(
    "El Mayor Promedio es:  " +
      calcularPromedio(comisionB) +
      " correspondiente a la comisionB"
  );
} else {
  console.log(
    "El Mayor Promedio es: " +
      calcularPromedio(comisionC) +
      " correspondiente a la comisionC"
  );
}
// en este if se devuelve el menor promedio de las tres comisiones
if (
  calcularPromedio(comisionA) < calcularPromedio(comisionB) &&
  calcularPromedio(comisionA) < calcularPromedio(comisionC)
) {
  console.log(
    "El Menor Promedio es: " +
      calcularPromedio(comisionA) +
      " correspondiente a la comisionA"
  );
} else if (
  calcularPromedio(comisionB) < calcularPromedio(comisionC) &&
  calcularPromedio(comisionB) < calcularPromedio(comisionC)
) {
  console.log(
    "El Menor Promedio es:  " +
      calcularPromedio(comisionB) +
      " correspondiente a la comisionB"
  );
} else {
  console.log(
    "El Menor Promedio es: " +
      calcularPromedio(comisionC) +
      " correspondiente a la comisionC"
  );
}
console.log("Cantidad de Desaprobados por Comision");
console.log(
  "Cantidad de desaprobados en la comisionA " +
    cantDesaprobadosporComision(comisionA)
);
console.log(
  "Cantidad de desaprobados en la comisionB " +
    cantDesaprobadosporComision(comisionB)
);
console.log(
  "Cantidad de desaprobados en la comisionC " +
    cantDesaprobadosporComision(comisionC)
);
console.log("Menor Nota por Comision");
console.log(menorNota(comisionA) + " comisionA");
console.log(menorNota(comisionB) + " comisionB");
console.log(menorNota(comisionC) + " comisionC");
