/*

Pavlov Valeriy, DIV Z
Ejercicio While 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-De los positivos el mas grande.
11-De los negativos el mas chico.

*/

function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativo;
	var diferenciaPositivosNegativos;
	var numeroMaximo;
	var numeroMinimo;

	respuesta = true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	numeroMaximo = 0;
	numeroMinimo = 0;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		//Suma de negativos, positivos, cero, minimos, maximos y sus contadores.
		if (numeroIngresado < 0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos++;
			if (numeroIngresado < numeroMinimo || contadorNegativos == 1)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		else
		{
			if (numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;
				if (numeroIngresado > numeroMaximo || contadorPositivos == 1)
				{
					numeroMaximo = numeroIngresado;
				}
			}
			else
			{
				contadorCeros++;
			}
		}

		//Numeros pares.
		if (numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}

		respuesta=confirm("desea continuar?");
	}

	//Diferencia entre positivos y negativos. (Se refiere al contador para Gianni)
	diferenciaPositivosNegativos = contadorPositivos - contadorNegativos;

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("La contidad de ceros es: " + contadorCeros + "<br>");
	document.write("La cantidad de pares es: " + contadorPares + "<br>");
	document.write("Diferencia entre la cantidad de positivos y negativos: " + diferenciaPositivosNegativos + "<br>");
	document.write("El numero minimo es: " + numeroMinimo + "<br>");
	document.write("El numero maximo es: " + numeroMaximo + "<br>");

	//Promedios.
	if(contadorPositivos > 0)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
		document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("No hay numeros positivos para calcular el promedio. <br>");
	}
	if(contadorNegativos > 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
		document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("No hay numeros negativos para calcular el promedio. <br>");
	}
}