/*
Pavlov Valeriy, DIV Z
Ejercicio IF 03
*/

function mostrar()
{
 	var edad;

 	edad = document.getElementById("txtIdEdad").value;
 	edad = parseInt(edad);

 	if (edad >= 18) // Otra opcion seria edad > 17 evitando el =.
 	{
 		alert("La persona es mayor de edad.");
 	}
 	if (edad < 18) // Otra opcion seria edad <= 17.
 	{
		alert("La persona es menor de edad.");
	}
}