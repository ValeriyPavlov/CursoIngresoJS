/*

Pavlov Valeriy, DIV Z
Ejercicio E/S 06


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numero1) + parseInt(numero2);

	alert("El resultado de la suma es: " + resultado);
}
