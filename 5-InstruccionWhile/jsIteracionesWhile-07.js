/*

Pavlov Valeriy, DIV Z
Ejercicio While 07

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.



function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
		respuesta = prompt("Desea continuar ingresando numeros? si / no");        // respuesta = confirm("Ingresar otro numero?") / respuesta = true/false; while(respuesta == true)
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}


Pavlov Valeriy, DIV Z
Ejercicio While 07 v1. abcdefghijklm



function mostrar()
{
	var alturaEnCentimetros;
	var edad;
	var temperaturaCentigrados;
	var sexo;
	var nota;
	var nombre;
	var contador = 0;
	var promedioAltura;
	var sumaAltura = 0;
	var contadorNoBi = 0;
	var contadorFemenino = 0;
	var contadorMasculino = 0;
	var aprobados = 0;
	var contadorMujeresAltas = 0;
	var mayoria;
	var nombrePersonaAlta;
	var alturaPersonaMasAlta = 0;
	var primeroConFiebre;
	var primeraMujerAprobada;
	var alturaPromedioAprobados = 0;
	var sumaAlturaAprobados = 0;
	var nombreDesaprobado;
	var porcentajeAprobados;
	var nombreHombreAlto;
	var notaHombreAlto;
	var personasConFiebre = 0;
	var personasMayoresConFiebre = 0;
	var porcentajeConFiebre;
	var porcentajeMayoresFiebre;

	primeraMujerAprobada = "";
	nombreDesaprobado = "";
	primeroConFiebre = "";
	nombreHombreAlto = "";



	while(contador<5)
	{
		//Altura.
		alturaEnCentimetros = prompt("Ingrese su altura en centimetros: ");
		alturaEnCentimetros = parseInt(alturaEnCentimetros);
		while(alturaEnCentimetros < 0 || alturaEnCentimetros > 250)
		{
			alturaEnCentimetros = prompt("Error, vuelva a ingresar una altura entre 0 y 250 cm:");
			alturaEnCentimetros = parseInt(alturaEnCentimetros);
		}

		//Edad.
		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(edad < 17 || edad > 120)
		{
			edad = prompt("Error, ingrese una edad entre 18 y 120:");
			edad = parseInt(edad);
		}

		//Temperatura.
		temperaturaCentigrados = prompt("Ingrese su temperatura en centigrados:");
		temperaturaCentigrados = parseInt(temperaturaCentigrados);
		while(temperaturaCentigrados < 25 || temperaturaCentigrados > 45)
		{
			temperaturaCentigrados = prompt("Error, ingrese una temperatura entre 25 y 45:");
			temperaturaCentigrados = parseInt(temperaturaCentigrados);
		}

		//Sexo.
		sexo = prompt("Ingrese su sexo f, m ó nb: ");
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Error, utilize f, m ó nb para indicar el sexo: ");
		}

		//Nota.
		nota = prompt("Ingrese su nota:");
		nota = parseInt(nota);
		while(nota < 1 || nota > 10)
		{
			nota = prompt("Error, solamente notas entre 1 y 10");
			nota = parseInt(nota);
		}

		//Nombre del alumno.
		nombre = prompt("Ingrese el nombre del estudiante: ");

		//Contador de sexos.
		switch(sexo) 
		{
			case "f":
				//Contador mujeres altas.
				if (alturaEnCentimetros > 190) 
				{
					contadorMujeresAltas++;
				}
				//Nombre de la primera mujer aprobada.
				if (primeraMujerAprobada == "") 
				{
					if (nota >= 6) 
					{
						primeraMujerAprobada = nombre;
					}
				}
				contadorFemenino++;
			break;
			case "m":
				//Nombre del primer hombre desaprobado y menor a 160cm.
				if (nombreDesaprobado == "") 
				{
					if (nota < 6 && alturaEnCentimetros < 160) 
					{
						nombreDesaprobado = nombre;
					}
				}
				//Nombre y nota del primer varon de 200cm+.
				if (nombreHombreAlto == "")
				{
					if (alturaEnCentimetros > 200) 
					{
						nombreHombreAlto = nombre;
						notaHombreAlto = nota;
					}
				}
				contadorMasculino++;
			break;
			case "nb":
				contadorNoBi++;
			break;
		}

		//Edad de la primera persona con fiebre.
		if (primeroConFiebre == "")
		{
			if (temperaturaCentigrados > 37) 
			{
				primeroConFiebre = edad;
			}
		}

		//Contador aprobados y su altura promedio.
		if (nota >= 6) 
		{
			aprobados++;
			sumaAlturaAprobados = sumaAlturaAprobados + alturaEnCentimetros;
		}

		//Nombre de la persona mas alta.
		if (alturaEnCentimetros > alturaPersonaMasAlta) 
		{
			alturaPersonaMasAlta = alturaEnCentimetros;
			nombrePersonaAlta = nombre;
		}

		//Contador de altura total.
		sumaAltura = sumaAltura + alturaEnCentimetros;

		//Personas con fiebre.
		if (temperaturaCentigrados > 37)
		{
			personasConFiebre++;
			if (edad > 50)
			{
				personasMayoresConFiebre++;
			}
		}

		//Contador del While / numero de Estudiantes.
		contador++;
	}

	// Promedio de alturas.
	promedioAltura = sumaAltura / contador;
	if(aprobados > 0)
	{
		alturaPromedioAprobados = sumaAlturaAprobados / aprobados;
	}

	// Mayoria de sexo.
	if (contadorFemenino > contadorMasculino && contadorFemenino > contadorNoBi) 
	{
		mayoria = " Hay mayoria femenina.";
	}
	else
	{
		if(contadorMasculino > contadorFemenino && contadorMasculino > contadorNoBi)
		{
			mayoria = " Hay mayoria masculina."
		}
		else
		{
			if(contadorNoBi > contadorMasculino && contadorNoBi > contadorFemenino)
			{
				mayoria = " Hay mayoria no-binaria.";
			}
			else
			{
				mayoria = " No hay una mayoria de sexo.";
			}
		}
	}

	//Porcentaje aprobados.
	porcentajeAprobados = aprobados * 100 / contador;

	//Porcentaje personas con fiebre y Mayores a 50 con fiebre.
	porcentajeConFiebre = personasMayoresConFiebre * 100 / contador;
	porcentajeMayoresFiebre = personasMayoresConFiebre * 100 / personasConFiebre;


	alert("La altura promedio es de: " + promedioAltura + " / Cantidad de estudiantes de sexo femenino: " + contadorFemenino + " / Cantidad de estudiantes de sexo masculino: " + contadorMasculino + " / Cantidad de estudiantes de sexo no-binario: " + contadorNoBi + " / Estudiantes aprobados: " + aprobados + " / Cantidad de mujeres que superen los 190cm: " + contadorMujeresAltas + " / " + mayoria + " / La persona mas alta es: " + nombrePersonaAlta + " / La primer persona con fiebre tiene: " + primeroConFiebre + " años. / La primer mujer aprobada es: " + primeraMujerAprobada + " / La altura promedio de los aprobados es de: " + alturaPromedioAprobados + "cm. / El nombre del primer hombre desaprobado, que mide menos de 160cm es: " + nombreDesaprobado + " / El procentaje de aprobados es de " + porcentajeAprobados + "%.  / El primer hombre alto es: " + nombreHombreAlto + " y su nota es un " + notaHombreAlto + " / Mayores a 50 con fiebre sobre total: " + porcentajeConFiebre + "% y sobre personas con fiebre: " + porcentajeMayoresFiebre + "%.");
}























/*

Pavlov Valeriy DIV Z
Ejercicio SABADOS While 07 v2 A,B,C,D,E,F,G,H,I,J,K,L.

*/

function mostrar()
{
	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombre;
	var respuesta;
	var contadorMujeres;
	var contadorHombres;
	var contadorNoBinario;
	var contadorConFiebre;
	var contadorSinFiebre;
	var acumuladorEdadesMujeres;
	var acumuladorEdadesHombres;
	var acumuladorEdadesNoBi;
	var promedioEdadMujeres;
	var promedioEdadHombres;
	var promedioEdadNoBi;
	var nombrePrimerAprobado;
	var banderaPrimerAprobado;
	var maximoTemperatura;
	var banderaTemperatura;
	var nombreMaximaTemperatura;
	var edadMaximaTemperatura;
	var edadNoBinarioMasJoven;
	var banderaNoBinario;
	var alturaNoBinarioJoven;
	var notaNoBinarioJoven;
	var alturaMujerMasAlta;
	var banderaMujerMasAlta;
	var nombreMujerMasAlta;
	var procentajeDesaprobados;
	var contadorDesaprobados;
	var contadorAprobados;
	var banderaHombreBajo;
	var nombreHombreBajoDesaprobado;

	respuesta = true;
	contadorMujeres = 0;
	contadorHombres = 0;
	contadorNoBinario = 0;
	contadorConFiebre = 0;
	contadorSinFiebre = 0;
	acumuladorEdadesMujeres = 0;
	acumuladorEdadesHombres = 0;
	acumuladorEdadesNoBi = 0;
	banderaPrimerAprobado = 0;
	banderaTemperatura = 0;
	banderaNoBinario = 0;
	banderaMujerMasAlta = 0;
	contadorDesaprobados = 0;
	contadorAprobados = 0;
	banderaHombreBajo = 0;


	while(respuesta == true)
	{
		//Toma y validacion de datos, donde corresponda
		altura = prompt("Ingrese altura del estudiante en centimetros:");
		altura = parseInt(altura);
		while(altura < 0 || altura > 250)
		{
			altura = prompt("Error, reingrese altura del estudiante en centimetros (entre 0 y 250):");
			altura = parseInt(altura);
		}
		edad = prompt("Ingrese la edad del estudiante:");
		edad = parseInt(edad);
		while(edad < 18 || edad > 120)
		{
			edad = prompt("Error, reingrese la edad del estudiante, entre 18 y 120:");
			edad = parseInt(edad);
		}
		temperatura = prompt("Ingrese la temperatura del estudiante:");
		temperatura = parseInt(temperatura);
		while(temperatura < 25 || temperatura > 45)
		{
			temperatura = prompt("Error, reingrese la temperatura (entre 25 y 45):");
			temperatura = parseInt(temperatura);
		}
		sexo = prompt("Ingrese el sexo del estudiante:");
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Error, reingrese el sexo del estudiante mediante (f / m / nb):");
		}
		nota = prompt("Ingrese la nota del estudiante:");
		nota = parseInt(nota);
		while(nota < 1 || nota > 10)
		{
			nota = prompt("Error, reingrese una nota valida (entre 1 y 10)");
			nota = parseInt(nota);
		}
		nombre = prompt("Ingrese el nombre del estudiante:");

		//Contadores y acumuladres de edad por sexo
		switch(sexo)
		{
			case "f":
				contadorMujeres++;
				acumuladorEdadesMujeres = acumuladorEdadesMujeres + edad;
				if(nota > 5)
				{
					//Nombre de la mujer aprobada mas alta
					if(alturaMujerMasAlta < altura || banderaMujerMasAlta == 0)
					{
						alturaMujerMasAlta = altura;
						nombreMujerMasAlta = nombre;
						banderaMujerMasAlta = 1;
					}
				}
			break;
			case "m":
				contadorHombres++;
				acumuladorEdadesHombres = acumuladorEdadesHombres + edad;
				//Hombre desaprobado y de menos de 160cm de altura
				if(banderaHombreBajo == 0 && altura < 160 && nota < 4)
				{
					nombreHombreBajoDesaprobado = nombre;
					banderaHombreBajo = 1;
				}
			break;
			default:
				contadorNoBinario++;
				acumuladorEdadesNoBi = acumuladorEdadesNoBi + edad;
				//Nota y altura de la persona No Binaria mas joven
				if(edadNoBinarioMasJoven > edad || banderaNoBinario == 0)
				{
					edadNoBinarioMasJoven = edad;
					alturaNoBinarioJoven = altura;
					notaNoBinarioJoven = nota;
					banderaNoBinario = 1;
				}
			break;
		}

		//Contador estudiantes con y sin fiebre
		if(temperatura > 37)
		{
			contadorConFiebre++;
		}
		else
		{
			contadorSinFiebre++;
		}

		//Nombre del primer aprobado
		if(banderaPrimerAprobado == 0 && nota > 3)
		{
			nombrePrimerAprobado = nombre;
			banderaPrimerAprobado = 1;
		}

		//Temperatura maxima
		if(maximoTemperatura < temperatura || banderaTemperatura == 0)
		{
			maximoTemperatura = temperatura;
			nombreMaximaTemperatura = nombre;
			edadMaximaTemperatura = edad;
			banderaTemperatura = 1;
		}

		//Contadores Aprobados/Desaprobados
		if(nota < 4)
		{
			contadorDesaprobados++;
		}
		else
		{
			contadorAprobados++;
		}

		//Ingresar otro estudiante
		respuesta = confirm("Desea continuar ingresando alumnos?");
	}

	//Promedios por sexo
	promedioEdadMujeres = acumuladorEdadesMujeres / contadorMujeres;
	promedioEdadHombres = acumuladorEdadesHombres / contadorHombres;
	promedioEdadNoBi = acumuladorEdadesNoBi / contadorNoBinario;

	//Porcentaje Desaprobados
	procentajeDesaprobados = (contadorDesaprobados * 100) / (contadorDesaprobados + contadorAprobados);


	//Alertas
	document.write("Cantidad de mujeres estudiantes: " + contadorMujeres + "<br>");

	document.write("Hay " + contadorConFiebre + " estudiantes con fiebre y " + contadorSinFiebre + " estudiantes sin fiebre. <br>");

	if(contadorMujeres != 0)
	{
		document.write("El promedio de edad para mujeres es de: " + promedioEdadMujeres + "<br>");
	}
	else
	{
		document.write("No se ingresaron mujeres. <br>");
	}

	if(contadorHombres != 0)
	{
		document.write("El primedio de edad para hombres es de: " + promedioEdadHombres + "<br>"); 
	}
	else
	{
		document.write("No se ingresaron hombres. <br>");
	}

	if(contadorNoBinario != 0)
	{
		document.write("El promedio de edad de para no binarios es de: " + promedioEdadNoBi + "<br>");
	}
	else
	{
		document.write("No se ingresaron estudiantes No Binarios. <br>")
	}

	if(contadorAprobados != 0)
	{
		document.write("El nombre del primer aprobado es: " + nombrePrimerAprobado + "<br>");
	}
	else
	{
		document.write("No hay aprobados. <br>");
	}

	document.write("El estudiante con la maxima temperatura es: " + nombreMaximaTemperatura + " y su edad es: " + edadMaximaTemperatura + " años. <br>");

	if(banderaNoBinario == 1)
	{
		document.write("La altura del No Binario mas joven es de: " + alturaNoBinarioJoven + "cm y su nota es un: " + notaNoBinarioJoven + "<br>");
	}
	else
	{
		document.write("No se ingresaron personas No Binarias. <br>");
	}

	if(banderaMujerMasAlta == 1)
	{
		document.write("La mujer aprobada mas alta es: " + nombreMujerMasAlta + "<br>");
	}
	else
	{
		document.write("No se ingreso ninguna mujer alta aprobada. <br>");
	}

	document.write("El porcentaje de desaprobados sobre el total es de: " + procentajeDesaprobados + "%. <br>");

	if(banderaHombreBajo == 1)
	{
		document.write("El nombre del primer hombre que mide menos de 160cm desaprobado es: " + nombreHombreBajoDesaprobado);
	}
	else
	{
		document.write("No se ingreso ningun hombre que mida menos de 160cm y que este desaprobado. <br>");
	}
}
