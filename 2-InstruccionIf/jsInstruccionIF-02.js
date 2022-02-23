/*
Pavlov Valeriy, DIV Z
Ejercicio IF 02
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("La persona es mayor de edad.");
	}
}