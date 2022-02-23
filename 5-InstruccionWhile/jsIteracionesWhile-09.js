/*

Pavlov Valeriy, DIV Z
Ejercicio While 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero = 0;
	respuesta = true;

	while (respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < numeroMinimo || banderaDelPrimero == 0)
		{
			numeroMinimo = numeroIngresado;
		}
		if (numeroIngresado > numeroMaximo || banderaDelPrimero == 0)
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		respuesta = confirm("Desea continuar ingresando numeros?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}
