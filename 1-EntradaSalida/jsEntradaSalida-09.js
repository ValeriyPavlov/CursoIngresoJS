/*

Pavlov Valeriy, DIV Z
Ejercicio E/S 09

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	resultado = sueldo + (sueldo / 100 * 10);
	document.getElementById("txtIdResultado").value = resultado;

}
