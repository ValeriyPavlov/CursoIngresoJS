/*3.	

Pavlov Valeriy, DIV Z
TP 3

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var centigrados;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseFloat(temperatura);
	centigrados = (temperatura - 32) * 0.5556;

	alert(temperatura + " Fahrenheit son " + centigrados + " Centígrados.");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheit;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseFloat(temperatura);
	fahrenheit = (temperatura * 9 / 5) + 32;

	alert(temperatura + " Centígrados son " + fahrenheit + " Fahrenheit.");
}
