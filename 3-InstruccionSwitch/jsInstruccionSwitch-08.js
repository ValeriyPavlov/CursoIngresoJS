/*
Pavlov Valeriy, DIV Z
Ejercicio SWITCH 08
*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "FRIO";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "CALOR";
			break;
	}

	alert(mensaje);
}