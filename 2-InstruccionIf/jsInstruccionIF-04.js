/*
Pavlov Valeriy, DIV Z
Ejercicio IF 04
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 13 && edad < 18)
	{
		alert("La persona es adolescente.");
	}
	else
	{
		alert("La persona no es adolescente.");
	}
}