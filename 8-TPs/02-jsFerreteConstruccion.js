/*2.	

Pavlov Valeriy, DIV Z
TP 2

	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var alambre;
	var texto;

	largoTerreno = document.getElementById("txtIdLargo").value;
	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = document.getElementById("txtIdAncho").value;
	anchoTerreno = parseFloat(anchoTerreno);
	alambre = ((largoTerreno + anchoTerreno) * 2) * 3; // Opcionalmente podriamos crear y asignar variables para el perimetro y la candidad de hilos de alambre.

	texto = "Alambre a comprar: " + alambre + " metros.";
	alert(texto);
}
function Circulo () 
{
	var radioTerreno;
	var alambre;
	var texto;

	radioTerreno = document.getElementById("txtIdRadio").value;
	radioTerreno = parseFloat(radioTerreno);
	alambre = radioTerreno * 2 * 3.14 * 3; // Opcionalmente podriamos crear variables para Pi o usar Math.PI, perimetro, y la candidad de hilos de alambre.

	texto = "Alambre a comprar: " + alambre + " metros.";
	alert(texto);

}
function Materiales () 
{
	
	var largoTerreno;
	var anchoTerreno;
	var bolsaCemento;
	var bolsaCal;
	var terreno;
	var texto;

	largoTerreno = document.getElementById("txtIdLargo").value;
	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = document.getElementById("txtIdAncho").value;
	anchoTerreno = parseFloat(anchoTerreno);
	terreno = largoTerreno * anchoTerreno;
	bolsaCemento = terreno * 2;
	bolsaCal = terreno * 3;

	texto = "Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.";
	alert(texto);

}