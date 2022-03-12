/*Mostrar información
Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let productoIngresado;
	let contador;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let banderaAlcoholBarato;
	let precioAlcoholBarato;
	let unidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let promedio;
	let mayorCantidadTipo;

	
	banderaAlcoholBarato = 0;
	contador = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	acumuladorJabon = 0;
	
    while(contador < 5)//5 vueltas del while por cada producto
	{
		productoIngresado = prompt("Ingrese su producto:");//pide producto y valido
		while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("No es un producto valido (Barbijo,Jabon,Alcohol)");
		}
	    precio = prompt("Ingrese el valor de producto:");//pido precio y valido
        precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
		   precio = prompt("Error,reingrese su valor");	
		   precio = parseInt(precio);
		}
		unidades = prompt("Ingrese su unidad");//pido unidades y valido
		unidades = parseInt(unidades);
		while(unidades < 1 || unidades > 1000 )
		{
			unidades = prompt("Reingrese su unidad");
			unidades = parseInt(unidades);
		}
		marca = prompt("Ingrese la marca de su producto");//pido marca
		fabricante = prompt("Ingrese fabricante del producto");//pido fabricante

		if(productoIngresado == "alcohol")//pregunto si es alcohol
		{
			acumuladorAlcohol = acumuladorAlcohol + unidades;//cantidad total de unidades de alcohol
			contadorAlcohol++;//cuantos tipos de alcohol
			if(precio < precioAlcoholBarato || banderaAlcoholBarato == 0 ) 
			//punto (a) declaro bandera y asigno precio de referencia
			//ya obtenida la referencia comparo si es mas barato y si es asi reemplazo el valor
			{
				precioAlcoholBarato = precio;//precio del alcohol mas barato (donde se guarda)
				unidadAlcoholBarato = unidades;//unidades de alcohol mas barato
				fabricanteAlcoholBarato = fabricante;//fabricante del alcohol mas barato
				banderaAlcoholBarato = 1;//bandera
			}
		}
		else
		{
			//vamos contando y acumulando los distintos productos
			if(productoIngresado == "barbijo")
			{
				acumuladorBarbijo = acumuladorBarbijo + unidades;
				contadorBarbijo++;
			}
			else
			{
				acumuladorJabon = acumuladorJabon + unidades;
				contadorJabon++;
			}
		}
		contador++;
	}//fin del while

    //comparo cantidades de productos para responder consigna b sin sentido
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		mayorCantidadTipo = "alcohol";
		promedio = acumuladorAlcohol / contadorAlcohol;

	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon)
		{
			mayorCantidadTipo = "barbijo";
			promedio = acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			mayorCantidadTipo = "jabon";
			promedio = acumuladorJabon / contadorJabon;
		}
	}
	//a
	document.write("El alcohol mas barato sale: " + precioAlcoholBarato + " y compro: " + unidadAlcoholBarato + " Unidades.Y el fabricante es: " + fabricanteAlcoholBarato + "<br>");
	//b
	document.write("El tipo con mas unidades es: " + mayorCantidadTipo + " y el promedio por compra es de " + promedio + "<br>");
	//c
	document.write("La cantidad de jabones que hay es: " + acumuladorJabon + "<br>");
}

