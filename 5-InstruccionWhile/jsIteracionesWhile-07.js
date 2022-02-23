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

*/

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
