/*
//Ejercicio 1 E/S.
function mostrar()
{
	alert("Esto funciona de maravilla");
}
========================================

Pavlov Valeriy, DIV Z
Ejercicio SABADO E/S 01

// Ejericio 01 Sabado.
function mostrar()
{
	var nombreUno;
	var nombreDos;
	var nombreTres;
	var precioUno;
	var precioDos;
	var precioTres;
	var precioBruto;
	var promedio;
	var precioIva;
	var descuento;
	var precioFinal;

	nombreUno = prompt("Ingrese el nombre del producto 1: ");
	precioUno = prompt("Ingrese el precio del producto " + nombreUno);
	nombreDos = prompt("Ingrese el nombre del producto 2: ");
	precioDos = prompt("Ingrese el precio del producto " + nombreDos);
	nombreTres = prompt("Ingrese el nombre del producto 3: ");
	precioTres = prompt("Ingrese el precio del producto " + nombreTres);
	descuento = prompt("Introduzca el descuento:");

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
	descuento = parseInt(descuento);

	precioBruto = precioUno + precioDos + precioTres;
	promedio = precioBruto / 3;
	precioIva = precioBruto * 1.21;
	precioFinal = precioIva - (precioIva / 100 * descuento);

	alert("El producto " + nombreUno + " con el precio de " + precioUno + ". El producto " + nombreDos + 
	" con el precio de " + precioDos + ". El producto " + nombreTres + " con el precio de " + precioTres + 
	". El precio bruto es " + precioBruto + " , el precio promedio es de " + promedio + " , el precio mas IVA es " + 
	precioIva + " , precio final con descuento de " + descuento + "% es de: " + precioFinal + " $.");
}

// Ejercicio ROMPECOCOS Sabado.
function mostrar()
{

	var diametroMayor;
	var diametroMenor;
	var catetoUno;
	var ladoMenor;
	var catetoDos;
	var ladoMayor;
	var perimetro;
	var area;
	var areaCola;
	var varillasEnMetros;
	var papelEnMetros;
	var resultadoPapel;
	var resultadoVarilla;
	var cantidadCometas;
	var papelColor;
	var texto;

	diametroMayor = prompt("Ingrese el diamatro mayor del cometa en centimetros: ");
	diametroMayor = parseFloat(diametroMayor);
	diametroMenor = prompt("Ingrese el diametro menor del cometa en centimetros: ");
	diametroMenor = parseFloat(diametroMenor);

	catetoUno = diametroMenor / 2;
	ladoMenor = Math.sqrt((catetoUno) ** 2 + (catetoUno) ** 2);
	catetoDos = diametroMayor - catetoUno;
	ladoMayor = Math.sqrt((catetoUno) ** 2 + (catetoDos) ** 2);
	perimetro = (ladoMenor * 2) + (ladoMayor * 2);
	area = (diametroMayor * diametroMenor) / 2;
	areaCola = (area / 100) * 10;
	varillasEnMetros = (perimetro + diametroMenor + diametroMayor) / 100;
	papelEnMetros = (area + areaCola) / 100;
	cantidadCometas = 10;
	resultadoPapel = papelEnMetros * cantidadCometas;
	resultadoVarilla = varillasEnMetros * cantidadCometas;
	papelColor = papelEnMetros / 2;

	texto = "Para la construccion de " + cantidadCometas + " cometas, necesitaria " + resultadoVarilla + 
	" metros de varilla y " + resultadoPapel + " metros cuadrados de papel.\n" + "Para un cometa bicolor, necesitaria " + 
	papelColor + " metros cuadrados de papel de cada color.";

	alert(texto);
}


================================================================================================================================================================================================================================================================================================

La universidad tecnológica nacional necesita un programa que calcule cuantos kilos de cemento necesita hacer para una determinada construcción. 
Para eso, necesita un algoritmo que permita el ingreso de bolsas de cal, cemento, arena y piedra. 
Sabemos que para 1 metro cuadrado se usan 3 de cemento, 1 de cal, 2 de arena y medio kilo de piedras, para el programa se necesita ingresar: 
nombre del arquitecto, edad del arquitecto validar que sea al menos mayor a 25 años, años de experiencia en la profesión (novato de 1 a 5 años de experiencia, 
avanzado de 6 a 12 años y experto con más de 22 años de experiencia), 
cantidad de metros cuadrados que necesita para la construcción de la casa (validar que no sea 0 o negativo, y la casa no puede tener más de 1250 metros cuadrados), 
también dar la opción de qué tipo de casa quiere realizar, una casa cuadrada, rectangular, triangular o circular (validar) 
Informar: 
1) la cantidad de bolsas de cemento, cal, arena y la cantidad de kilos de piedra que va a necesitar para cualquiera que sea la construcción indicada.
2) el nombre del arquitecto más joven
3) la cantidad de años de experiencia del arquitecto más viejo
4) la cantidad de arquitectos de cada nivel de experiencia (novato, avanzado, profesional)
5) el promedio de años de los arquitectos que son avanzados
6) el promedio de edad de los arquitectos expertos que tienen más de 50 años de edad 
7) el arquitecto que más bolsas de cemento usó
8) el arquitecto experto que menos kilos de piedra uso
9) cual fue el formato de casa más pedido
10) del formato más pedido, indicar que arquitecto lo realizó, cuántas bolsas de los distintos materiales y su nombre
11) indicar el nombre y edad del arquitecto que menos experiencia tiene en total

*/

function mostrar()
{
	var respuesta;
	var nombreArquitecto;
	var edadArquitecto;
	var añosExperiencia;
	var experienciaTipo;
	var metrosCuadrados;
	var tipoCasa;
	var cemento;
	var arena;
	var cal;
	var piedra;
	var contadorGeneral;
	var minimoArquitecto;
	var nombreArquitectoJoven;
	var maximoArquitecto;
	var expArquitectoViejo;
	var contadorNovato;
	var contadorAvanzado;
	var contadorExperto;
	var acumuladorAñosAvanzado;
	var promedioAñosAvanzado;
	var acumuladorExpertos50;
	var promedioExpertos50;
	var contadorExpertos50;
	var maximoMetrosCuadrados;
	var nombreArquitectoMasBolsas;
	var maximoBolsasCemento;
	var minimoPiedra;
	var nombreMinimoPiedra;
	var minimoKilosPiedra;
	var contadorCuadrada;
	var contadorTriangular;
	var contadorRectangular;
	var contadorCircular;
	var tipoCasaMasPedido;
	var nombreMenorExperiencia;
	var edadMenorExperiencia;
	var experienciaMenor;
	var nombreCuadrada;
	var nombreTriangular;
	var nombreCirular;
	var nombreRectangular;
	var metrosCuadrada;
	var metrosTriangular;
	var metrosCircular;
	var metrosRectangular;
	var nombreMaximoTipo;
	var metrosMaximoTipo;
	var arenaTipo;
	var cementoTipo;
	var calTipo;
	var piedraTipo;


	respuesta = true;
	contadorGeneral = 0;
	contadorNovato = 0;
	contadorAvanzado = 0;
	contadorExperto = 0;
	acumuladorAñosAvanzado = 0;
	acumuladorExpertos50 = 0;
	contadorExpertos50 = 0;
	contadorCuadrada = 0;
	contadorTriangular = 0;
	contadorRectangular = 0;
	contadorCircular = 0;


	while(respuesta == true)
	{
		//Ingreso y validacion de datos
		nombreArquitecto = prompt("Ingrese el nombre del arquitecto:");
		edadArquitecto = prompt("Ingrese la edad del arquitecto:");
		edadArquitecto = parseInt(edadArquitecto);
		while(edadArquitecto < 25 || edadArquitecto > 120)
		{
			edadArquitecto = prompt("Error, reingrese la edad entre 25 y 120:");
			edadArquitecto = parseInt(edadArquitecto);
		}
		añosExperiencia = prompt("Ingrese los años de experiencia del arquitecto:");
		añosExperiencia = parseInt(añosExperiencia);
		while(añosExperiencia < 1)
		{
			añosExperiencia = prompt("Error, reingrese años de experiencia mayor a 0");
			añosExperiencia = parseInt(añosExperiencia);
		}
		metrosCuadrados = prompt("Ingrese las dimensiones de la construccion en metros cuadrados:");
		metrosCuadrados = parseInt(metrosCuadrados);
		while(metrosCuadrados < 1 || metrosCuadrados > 1250)
		{
			metrosCuadrados = prompt("Error, reingrese dimensiones entre 1 y 1250:");
			metrosCuadrados = parseInt(metrosCuadrados);
		}
		tipoCasa = prompt("Ingrese el tipo de casa a realizar:");
		while(tipoCasa != "cuadrada" && tipoCasa != "triangular" && tipoCasa != "rectangular" && tipoCasa != "circular")
		{
			tipoCasa = prompt("Error, reingrese tipo (cuadrada / rectangular / triangular / circular):");
		}
		//Fin ingreso y validacion

		//Tipo de experiencia segun los años sus contadores y acumuladores donde corresponda.
		switch(añosExperiencia)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				experienciaTipo = "novato";
				contadorNovato++;
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
				experienciaTipo = "avanzado";
				contadorAvanzado++;
				acumuladorAñosAvanzado = acumuladorAñosAvanzado + edadArquitecto;     // se pudo haber referido a años de experiencia, si fue asi cambiar edadArquitecto por añosArquitecto.
			break;
			default:
				if(añosExperiencia > 22)
				{
					experienciaTipo = "experto";
					contadorExperto++;
					// Arquitectos de mas de 50 años.
					if(edadArquitecto > 50)
					{
						acumuladorExpertos50 = acumuladorExpertos50 + edadArquitecto;
						contadorExpertos50++;
					}
					// Arquitecto que utilizo el minimo de pierda.
					if(minimoPiedra > metrosCuadrados || contadorExperto == 0)
					{
						minimoPiedra = metrosCuadrados;
						nombreMinimoPiedra = nombreArquitecto;
					}
				}
			break;
		}

		//Arquitecto mas joven y su nombre.
		if(minimoArquitecto > edadArquitecto || contadorGeneral == 0)
		{
			minimoArquitecto = edadArquitecto;
			nombreArquitectoJoven = nombreArquitecto;
		}
		//Arquitecto mas viejo y sus años de experiencia.
		if(maximoArquitecto < edadArquitecto || contadorGeneral == 0)
		{
			maximoArquitecto = edadArquitecto;
			expArquitectoViejo = añosExperiencia;
		}
		//Maximo bolsas de cemento y el nombre del arquitecto.
		if(maximoMetrosCuadrados < metrosCuadrados || contadorGeneral == 0)
		{
			maximoMetrosCuadrados = metrosCuadrados;
			nombreArquitectoMasBolsas = nombreArquitecto;
		}
		//Arquitecto con menos experiencia.
		if(experienciaMenor > añosExperiencia || contadorGeneral == 0)
		{
			nombreMenorExperiencia = nombreArquitecto;
			edadMenorExperiencia = edadArquitecto;
		}

		//Contadores segun tipo de casas.
		switch(tipoCasa)
		{
			case "cuadrada":
				contadorCuadrada++;
				nombreCuadrada = nombreArquitecto;
				metrosCuadrada = metrosCuadrados;
			break;
			case "triangular":
				contadorTriangular++;
				nombreTriangular = nombreArquitecto;
				metrosTriangular = metrosCuadrados;
			break;
			case "rectangular":
				contadorRectangular++;
				nombreRectangular = nombreArquitecto;
				metrosRectangular = metrosCuadrados;
			break;
			case "circular":
				contadorCircular++;}
				nombreCirular = nombreArquitecto;
				metrosCircular = metrosCuadrados;
			break;
		}

		cemento = metrosCuadrados * 3;
		cal = metrosCuadrados * 1;
		arena = metrosCuadrados * 2;
		piedra = metrosCuadrados * 0.5;

		alert("La cantidad de materiales que va a necesitar para la construccion de la casa ingresada es: " + cemento + " de cemento, " + cal + " de cal, " + arena + " de arena, y " + piedra + " kg de pierda.");
		contadorGeneral++;
		respuesta = confirm("Desea continuar ingresando datos?");
	}

	//Calculos generales.
	promedioAñosAvanzado = acumuladorAñosAvanzado / contadorAvanzado;
	promedioExpertos50 = acumuladorExpertos50 / contadorExpertos50;
	maximoBolsasCemento = maximoMetrosCuadrados * 3;
	minimoKilosPiedra = minimoPiedra * 0.5;

	//Tipo de casa mas pedido.
	if(contadorCuadrada > contadorTriangular && contadorCuadrada > contadorCircular && contadorCuadrada > contadorRectangular)
	{
		tipoCasaMasPedido = "Cuadrada";
		nombreMaximoTipo = nombreCuadrada;
		metrosMaximoTipo = metrosCuadrada;
	}
	else
	{
		if(contadorTriangular > contadorCircular && contadorTriangular > contadorRectangular)
		{
			tipoCasaMasPedido = "Triangular";
			nombreMaximoTipo = nombreTriangular;
			metrosMaximoTipo = metrosTriangular;
		}
		else
		{
			if(contadorCircular > contadorRectangular)
			{
				tipoCasaMasPedido = "Circular";
				nombreMaximoTipo = nombreCirular;
				metrosMaximoTipo = metrosCircular;
			}
			else
			{
				tipoCasaMasPedido = "Reclangular";
				nombreMaximoTipo = nombreRectangular;
				metrosMaximoTipo = metrosRectangular;
			}
		}
	}
	arenaTipo = metrosMaximoTipo * 2;
	calTipo = metrosMaximoTipo * 1;
	piedraTipo = metrosMaximoTipo * 0.5;
	cementoTipo = metrosMaximoTipo * 3;

	//Mostrar datos.
	document.write("El arquitecto mas joven es: " + nombreArquitectoJoven + "<br>");
	document.write("Años de experiencia del arquitecto mas viejo: " + expArquitectoViejo + "<br>");
	document.write("Cantidad de arquitectos de cada nivel de experiencia: " + contadorNovato + " de novatos, " + contadorAvanzado + " de avanzados y " + contadorExperto + " de espertos. <br>");
	if(contadorAvanzado != 0)
	{
		document.write("El promedio de la edad de los arquitectos avanzados es de: " + promedioAñosAvanzado);
	}
	else
	{
		document.write("No se ingresaron arquitectos avanzados. <br>");
	}
	if(contadorExpertos50 != 0)
	{
		document.write("El promedio de edad de los arquitectos expertos de mas de 50 años de edad es de: " + promedioExpertos50 + "<br>");
	}
	else
	{
		document.write("No se ingresaron arquitectos expertos de mas de 50 años. <br>");
	}
	document.write("El nombre del arquitecto que uso mas bolsas de cemento es: " + nombreArquitectoMasBolsas + " y utilizó: " + maximoBolsasCemento + " bolsas de cemento. <br>");
	if(contadorExperto != 0)
	{
		document.write("El nombre del arquitecto que utilizo menos piedra es: " + nombreMinimoPiedra + " y utilizó " + minimoKilosPiedra + " kilos de pierda. <br>");
	}
	else
	{
		document.write("No se ingresaron arquitectos expertos. <br>");
	}
	document.write("El tipo de casa mas pedido es el " + tipoCasaMasPedido + "<br>");
	document.write("El nombre del arquitecto con menos experiencia es " + nombreMenorExperiencia + " y tiene " + edadMenorExperiencia + " años. <br>");
	document.write("El arquitecto que realizo la casa del tipo mas pedido es " + nombreMaximoTipo + " y utilizo: " + cementoTipo + " de cemento, " + calTipo + " de cal, " + arenaTipo + " de arena y " + piedraTipo + " kg de pierda.");
	
}	