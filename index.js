

function main() {
    const opcion = prompt("1.- triangulo 2.- cuadrado 3.- rectangulo 4.-circulo ");

  switch (opcion) {
    case "1":
      const base = prompt("iongrese la base");
      const altura = prompt("ingrese la altura");
      const area = (base * altura) / 2;
      console.log("El área del traingulo es: " + area);
      break;
    case "2":
      const lado1 = prompt("iongrese la base");
      const lado2 = prompt("iongrese la base");
      const areaC = lado1 * lado2;
      console.log("el área del cuadrado es " + areaC);
      break;
    case "3":
      const baseR = prompt("iongrese la base");
      const alturaR = prompt("ingrese la altura");
      const areaR = (baseR * alturaR);
      console.log("El área del rectangulo es: " + areaR);
      break;
    case "4":
      const radio = prompt("ingrese el radio del circulo");
      const areaCir = (radio*radio) * 3.1416;
      console.log("El área del traingulo es: " + areaCir);
      break;
    default:
      console.log("No se encontre la opcion");
      break;
  }
}
main()