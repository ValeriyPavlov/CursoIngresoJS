/*1.	

Pavlov Valeriy, DIV Z
TP 1

	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var texto;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);
	resultadoSuma = precioUno + precioDos + precioTres;

	texto = "La suma de los tres productos es de " + resultadoSuma;
	alert(texto);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoPromedio;
	var texto;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);
	resultadoPromedio = (precioUno + precioDos + precioTres) / 3

	texto = "El promedio de los productos es de: " + resultadoPromedio;
	alert(texto);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var texto;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);
	precioTotal = (precioUno + precioDos + precioTres) * 1.21;

	texto = "El precio final es de: " + precioTotal;
	alert(texto);
	
}