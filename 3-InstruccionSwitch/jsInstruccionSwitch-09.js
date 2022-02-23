/*
Pavlov Valeriy, DIV Z
Ejercicio SWITCH 09
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;
	var tarifaBase;
	var aumento;
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	tarifaBase = 15000;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aumento = 1.2;
					break;
				case "Mar del plata":
					aumento = 0.8;
					break;
				default:
					aumento = 0.9;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aumento = 0.8;
					break;
				case "Mar del plata":
					aumento = 1.2;
					break;
				default:
					aumento = 1.1;
					break;
			}
			break;

		default:
		{
			switch (destinoIngresado)
			{
				case "Cordoba":
					aumento = 1;
					break;
				default:
					aumento = 1.1;
					break;
			}
			break;
		}
	}

	precioFinal = tarifaBase * aumento;
	mensaje = "Precio final: $" + precioFinal;

	alert(mensaje);
}