/*
Pavlov Valeriy, DIV Z
Ejercicio IF 10
*/

function mostrar()
{
	var numeroRandom;
	var texto;

	numeroRandom = Math.floor(Math.random() * 10 + 1);
	texto = "Vamos, la proxima se puede";
	
	if (numeroRandom > 8)
	{
		texto = "EXCELENTE";
	}
	else
	{
		if (numeroRandom > 3)
		{
			texto = "APROBÓ";
		}
	}

	alert(numeroRandom + ", " + texto);
}