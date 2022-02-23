/*
Pavlov Valeriy, DIV Z
Ejercicio SWITCH 07
*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Oeste";
			break;
		case "Cataratas":
			mensaje = "Norte";
			break;
		case "Mar del plata":
			mensaje = "Este";
			break;
		case "Ushuaia":
			mensaje = "Sur";
			break;
	}

	alert(mensaje);
}