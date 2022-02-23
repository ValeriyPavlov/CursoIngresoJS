/*
Pavlov Valeriy, DIV Z
Ejercicio SWITCH 02
*/

function mostrar()
{

	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!"
			break;

		default:
			mensaje = "Falta para el invierno.";
			break;	
	}

	alert(mensaje);
}