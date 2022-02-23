/*
Pavlov Valeriy, DIV Z
Ejercicio IF 07


function mostrar()
{

	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

}

/*

Pavlov Valeriy DIV Z

Ejercicio IF 07 BIS V1

*/

function mostrar()
{

	var edad;
	var estadoCivil;
	var nombre;
	var texto;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	texto = "";
	nombre = prompt("Ingrese su nombre: ");


	if (edad < 13)
	{
		texto = "feliz dia";
		if (nombre == "Ricardo")
		{
			texto = texto + ", muy chiquito para ese nombre";
		}
	}
	else
	{
		if (edad < 18)
		{
			texto = "usted es adolescente";
			if (edad == 17)
			{
				texto = texto + " , ultimo año!!!";
			}
			if (nombre == "Violeta")
			{
				texto = texto + ", como un color!!";
			}
			if (estadoCivil == "Divorciado")
			{
				texto = texto + ", toda una vida por delante";
			}
		}
		else
		{
			texto = "tienes edad de laburar";
			if (edad > 60)
			{
				texto = texto + ", a jubilarse";
				if (edad == 88)
				{
					texto = texto + ", a lindo numero";
				}
				if (nombre == "Alfredo") 
				{
					texto = texto + ", como el de QUEEN";
				}
			}
			else
			{
				if (estadoCivil == "Soltero")
				{
					texto = texto + ", a salir";
				}
			}
			if (edad == 33)
			{
				texto = texto + ", como cristo";
			}
		}
		if (estadoCivil == "Casado")
		{
			texto = texto + ", casada quiere casa";
		}
	}

	if (edad % 2 == 0) 
	{
		texto = texto + ", sos par!!";
	}

	alert(texto);
}
