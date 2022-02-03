/*

Pavlov Valeriy, DIV Z
Ejercicio E/S 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var importe;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	resultado = importe * 0.75;
	document.getElementById("txtIdResultado").value = resultado;

}
