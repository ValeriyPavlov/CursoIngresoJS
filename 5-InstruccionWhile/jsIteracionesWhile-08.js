/*

Pavlov Valeriy, DIV Z
Ejercicio While 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado>=0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = confirm("Desea continuar ingresando numeros?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}