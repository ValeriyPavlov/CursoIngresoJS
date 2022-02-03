/*

Pavlov Valeriy, DIV Z
Ejercicio E/S 03

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = txtIdNombre.value; //  Forma correcta de obtener el valor -> document.getElementById('txtIdNombre')
	alert(nombreIngresado);
}
