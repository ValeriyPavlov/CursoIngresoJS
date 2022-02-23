/*
Pavlov Valeriy, DIV Z
Ejercicio IF 05
*/

function mostrar()
{

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 13 || edad > 17)       // otra opcion es usar if (! (edad > 12 && edad < 17))
	{
		alert("La persona NO es adolescente.");
	}
}