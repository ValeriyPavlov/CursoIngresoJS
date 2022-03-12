/*

Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var personaConMasTemperatura;
	var primeraPersonaConTemperatura;
	var mayorTemperatura;
	var contadorAdultosViudos;
	var contadorHombresSolteros;
	var contador60AñosConFiebre;
	var contadorHombres;
	var sumaEdades;
	var promedioEdades;


	respuesta = true;
	primeraPersonaConTemperatura = "";
	contadorAdultosViudos = 0;
	contadorHombresSolteros = 0;
	contador60AñosConFiebre = 0;
	contadorHombres = 0;
	sumaEdades = 0;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese su nombre:");
		//Edad
		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(edad < 0 || edad > 120)
		{
			edad = prompt("Error, reingrese una edad entre 1 y 120");
			edad = parseInt(edad);
		}
		//Sexo
		sexo = prompt("Ingrese su sexo:");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, reingrese sexo mediante f ó m");
		}
		//Estado Civil
		estadoCivil = prompt("Ingrese su estado civil:");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error, reingrese estado civil (casado, viudo o soltero):");
		}
		//Temperatura
		temperaturaCorporal = prompt("Ingrese su temperatura corporal:");
		temperaturaCorporal = parseFloat(temperaturaCorporal);
		while(temperaturaCorporal < 25 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = prompt("Error, reingrese una temperatura entre 25 y 45:");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}


		//Nombre de la persona con mayor temperatura.
		if(mayorTemperatura < temperaturaCorporal || primeraPersonaConTemperatura == "")
		{
			mayorTemperatura = temperaturaCorporal;
			personaConMasTemperatura = nombre;
			primeraPersonaConTemperatura = nombre;
		}
		//Contador adultos viudos.
		if(edad > 17 && estadoCivil == "viudo")
		{
			contadorAdultosViudos++;
		}
		//Hombres solteros contador y suma de edades y contador hombres vuidos + solteros.
		if(sexo == "m" && estadoCivil != "casado")
		{
			contadorHombresSolteros++;
			if(estadoCivil != "viudo")
			{
				contadorHombres++;
				sumaEdades = sumaEdades + edad;
			}
		}
		//Personas mayores a 60 años con mas de 38 de fiebre.
		if(edad > 60 && temperaturaCorporal > 38)
		{
			contador60AñosConFiebre++;
		}

		respuesta = confirm("Desea continuar ingresando datos?");
	}

	promedioEdades = sumaEdades / contadorHombres;

	document.write("Persona con mas temperatura es: " + personaConMasTemperatura + "<br>");
	document.write("Hay " + contadorAdultosViudos + " adultos viudos. <br>");
	document.write("Hay " + contadorHombresSolteros + " hombres solteros o viudos. <br>");
	document.write("Hay " + contador60AñosConFiebre + " personas mayores de 60 años con mas de 38 de temperatura. <br>");
	document.write("El promedio de edad entre hombres solteros es de: " + promedioEdades + "<br>");
}
