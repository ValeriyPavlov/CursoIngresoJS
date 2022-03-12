/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
 	var numeroIngresado;
 	var numerosPares;

 	numerosPares = 0;

 	numeroIngresado = document.getElementById("txtIdNumero").value;
 	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 0)
	{
		if (numeroIngresado % 2 == 0) 
		{
		 	numerosPares++;
		}
		numeroIngresado = numeroIngresado - 1;
	}

	alert("Hay " + numerosPares + " numeros pares entre el numero ingresado y cero.");
}

function NumerosImpares () 
{
 	var numeroIngresado;
 	var numerosImpares;

 	numerosImpares = 0;

 	numeroIngresado = document.getElementById("txtIdNumero").value;
 	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 0)
	{
		if (numeroIngresado % 2 == 1) 
		{
			numerosImpares++;
		}
		numeroIngresado = numeroIngresado - 1;
	}

	alert("Hay " + numerosImpares + " numeros impares entre el numero ingresado y cero.");
}

function NumerosDivisibles ()
{
	var numeroIngresado;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	while(numeroIngresado < 1 || numeroIngresado > 100)
	{
		alert("Error, vuelva a ingresar un numero entre 1 y 100");
	}
	numeroIngresado = parseInt(numeroIngresado);
	while()
	{

	}

}