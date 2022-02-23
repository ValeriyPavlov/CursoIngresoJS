/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var estadoCivilLetras;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;
    var nacionalidadLetras;

    //Edad
    edadIngresada = prompt("Ingrese la edad:");
    edadIngresada = parseInt(edadIngresada);
    while(edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("Error, reingrese una edad entre 18 y 90 inclusive: ");
        edadIngresada = parseInt(edadIngresada);
    }
    document.getElementById("txtIdEdad").value = edadIngresada;

    //Sexo
    sexoIngresado = prompt("Ingrese el sexo:");
    while(sexoIngresado != "M" && sexoIngresado != "F")
    {
        sexoIngresado = prompt("Error, reingrese el sexo indicando “F” para femenino y “M” para masculino:");
    }
    if(sexoIngresado == "M")
    {
        document.getElementById("txtIdSexo").value = "Masculino";
    }
    else
    {
        document.getElementById("txtIdSexo").value = "Femenino";
    }
    
    //Estado Civil
    estadoCivilIngresado = prompt("Ingrese estado civil:");
    estadoCivilIngresado = parseInt(estadoCivilIngresado);
    while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
    {
        estadoCivilIngresado = prompt("Error, reingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos:");
        estadoCivilIngresado = parseInt(estadoCivilIngresado);
    }
    switch(estadoCivilIngresado)
    {
        case 1:
            estadoCivilLetras = "Soltero/a";
        break;
        case 2:
            estadoCivilLetras = "Casado/a";
        break;
        case 3:
            estadoCivilLetras = "Divorciado/a";
        break;
        case 4:
            estadoCivilLetras = "Viudo/a";
        break;
    }
    document.getElementById("txtIdEstadoCivil").value = estadoCivilLetras;

    //Sueldo Bruto
    sueldoBruto = prompt("Ingrese Sueldo Bruto: ");
    sueldoBruto = parseInt(sueldoBruto);
    while(sueldoBruto < 8000)
    {
        sueldoBruto = prompt("Error, reingrese Sueldo Bruto no menor a 8000$: ");
        sueldoBruto = parseInt(sueldoBruto);
    }
    document.getElementById("txtIdSueldo").value = sueldoBruto;

    //Legajo
    numeroLegajo = prompt("Ingrese numero de legajo: ");
    numeroLegajo = parseInt(numeroLegajo);
    while(numeroLegajo < 1000 || numeroLegajo > 9999)
    {
        numeroLegajo = prompt("Error, reingrese un numero de legajo valido (1000 - 9999) ");
        numeroLegajo = parseInt(numeroLegajo);
    }
    document.getElementById("txtIdLegajo").value = numeroLegajo;

    //Nacionalidad
    nacionalidad = prompt("Ingrese la nacionalidad: ");
    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad = prompt("Error, reingrese nacionalidad usando “A” para argentinos, “E” para extranjeros, “N” para nacionalizados: ");
    }
    switch(nacionalidad)
    {
        case "A":
            nacionalidadLetras = "Argentino/a";
        break;
        case "E":
            nacionalidadLetras = "Extranjero/a";
        break;
        case "N":
            nacionalidadLetras = "Nacionalizado/a";
        break;
    }
    document.getElementById("txtIdNacionalidad").value = nacionalidadLetras;
}

