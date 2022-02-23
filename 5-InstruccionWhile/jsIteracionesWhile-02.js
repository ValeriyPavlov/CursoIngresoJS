/*

Pavlov Valeriy, DIV Z
Ejercicio While 02

al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=0; 

	while(contador < 10)
	{
		document.write((10 - contador) + "<br>");
		contador++;
	}
}