/*
//Ejercicio 1 E/S.
function mostrar()
{
	alert("Esto funciona de maravilla");
}
========================================

Pavlov Valeriy, DIV Z
Ejercicio SABADO E/S 01

// Ejericio 01 Sabado.
function mostrar()
{
	var nombreUno;
	var nombreDos;
	var nombreTres;
	var precioUno;
	var precioDos;
	var precioTres;
	var precioBruto;
	var promedio;
	var precioIva;
	var descuento;
	var precioFinal;

	nombreUno = prompt("Ingrese el nombre del producto 1: ");
	precioUno = prompt("Ingrese el precio del producto " + nombreUno);
	nombreDos = prompt("Ingrese el nombre del producto 2: ");
	precioDos = prompt("Ingrese el precio del producto " + nombreDos);
	nombreTres = prompt("Ingrese el nombre del producto 3: ");
	precioTres = prompt("Ingrese el precio del producto " + nombreTres);
	descuento = prompt("Introduzca el descuento:");

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
	descuento = parseInt(descuento);

	precioBruto = precioUno + precioDos + precioTres;
	promedio = precioBruto / 3;
	precioIva = precioBruto * 1.21;
	precioFinal = precioIva - (precioIva / 100 * descuento);

	alert("El producto " + nombreUno + " con el precio de " + precioUno + ". El producto " + nombreDos + 
	" con el precio de " + precioDos + ". El producto " + nombreTres + " con el precio de " + precioTres + 
	". El precio bruto es " + precioBruto + " , el precio promedio es de " + promedio + " , el precio mas IVA es " + 
	precioIva + " , precio final con descuento de " + descuento + "% es de: " + precioFinal + " $.");
}
*/
// Ejercicio ROMPECOCOS Sabado.
function mostrar()
{

	var diametroMayor;
	var diametroMenor;
	var catetoUno;
	var ladoMenor;
	var catetoDos;
	var ladoMayor;
	var perimetro;
	var area;
	var areaCola;
	var varillasEnMetros;
	var papelEnMetros;
	var resultadoPapel;
	var resultadoVarilla;
	var cantidadCometas;
	var papelColor;
	var texto;

	diametroMayor = prompt("Ingrese el diamatro mayor del cometa en centimetros: ");
	diametroMayor = parseFloat(diametroMayor);
	diametroMenor = prompt("Ingrese el diametro menor del cometa en centimetros: ");
	diametroMenor = parseFloat(diametroMenor);

	catetoUno = diametroMenor / 2;
	ladoMenor = Math.sqrt((catetoUno) ** 2 + (catetoUno) ** 2);
	catetoDos = diametroMayor - catetoUno;
	ladoMayor = Math.sqrt((catetoUno) ** 2 + (catetoDos) ** 2);
	perimetro = (ladoMenor * 2) + (ladoMayor * 2);
	area = (diametroMayor * diametroMenor) / 2;
	areaCola = (area / 100) * 10;
	varillasEnMetros = (perimetro + diametroMenor + diametroMayor) / 100;
	papelEnMetros = (area + areaCola) / 100;
	cantidadCometas = 10;
	resultadoPapel = papelEnMetros * cantidadCometas;
	resultadoVarilla = varillasEnMetros * cantidadCometas;
	papelColor = papelEnMetros / 2;

	texto = "Para la construccion de " + cantidadCometas + " cometas, necesitaria " + resultadoVarilla + 
	" metros de varilla y " + resultadoPapel + " metros cuadrados de papel.\n" + "Para un cometa bicolor, necesitaria " + 
	papelColor + " metros cuadrados de papel de cada color.";

	alert(texto);
}
