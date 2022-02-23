/*

Pavlov Valeriy, DIV Z
Ejercicio While 05

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado = prompt("Reingrese f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}