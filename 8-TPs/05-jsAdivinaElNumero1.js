/*
Pavlov Valeriy DIV Z
TP 5

Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

// USANDO IF:
var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 1;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100);
	alert("Se ha seleccionado un numero random, verifique para tratar de adivinarlo...");
	document.getElementById("txtIdIntentos").value = 0;
}

function verificar()
{
	
	var numeroIntroducido;
	var mensaje;

	numeroIntroducido = document.getElementById("txtIdNumero").value;
	numeroIntroducido = parseInt(numeroIntroducido);
	document.getElementById("txtIdIntentos").value = contadorIntentos;


	if (numeroSecreto == numeroIntroducido) 
	{
		mensaje = "Usted es el ganador!!! y en solo " + contadorIntentos + " intentos.";
	}
	else
	{
		if (numeroSecreto > numeroIntroducido) 
		{
			mensaje = "falta...";
			contadorIntentos++;
		}
		else
		{
			mensaje = "se pasó...";
			contadorIntentos++;
		}
	}
	alert(mensaje);
}
