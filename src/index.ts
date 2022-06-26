let min, max, suma, promedio, cantidad: number;
let num: number = Number(prompt("Ingrese un número (0 para cortar)"));
cantidad = 0;
suma = 0;
promedio = 0;
min = num;
max = num;
while (num !== 0) {
  if (num < min) {
    min = num;
  } else if (num > max) {
    max = num;
  }
  suma += num;
  cantidad++;
  num = Number(prompt("Ingrese un número (0 para cortar)"));
}
if (cantidad > 0) {
  promedio = suma / cantidad;
  console.log("El mínimo es: ", min);
  console.log("El máximo es: ", max);
  console.log("El promedio es: " + promedio);
} else {
  console.log("No ingreso ningún número!");
}
