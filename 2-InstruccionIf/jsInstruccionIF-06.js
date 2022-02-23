/*
Pavlov Valeriy, DIV Z
Ejercicio IF 06
*/

function mostrar()
{

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17) 
	{
		alert("La persona es mayor de edad.");
	}
	else
	{
		if (edad > 12 && edad < 18) 
		{
			alert("La persona es adolescente.");
		}
		else
		{
			alert("La persona es un niño.");
		}
	}

}

/*
Otra forma de hacerlo seria:

var mensaje;
mensaje = "Soy adolescente";

if (edad > 17)
{
	mensaje = "Soy adulto";
}
else
{
	if (edad < 13)
	{
		mensaje = "Soy niño";
	}
}
alert(mensaje);
*/