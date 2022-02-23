/*
Pavlov Valeriy, DIV Z
Ejercicio SWITCH 04
*/

function mostrar()
{

	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Febrero":
			mensaje = "Tiene 28 dias.";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 dias.";
			break;

		default:
			mensaje = "Tiene 31 dias.";
			break;
	}

	alert(mensaje);
}