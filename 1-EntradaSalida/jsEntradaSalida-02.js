/*

Pavlov Valeriy, DIV Z
Ejercicio E/S 02

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = prompt("Ingrese su nombre");
	alert(nombreIngresado);
}
*/


/*
Ejercicio 2:
La cadena de super mercados Coto nos pide un programa para manejar el stock de mercadería✔️
para así poder decidir mejor sus ofertas, para eso debemos poder ingresar:✔️
Tipo de producto: fideos, galletitas, harina, jugo, vino (validar)✔️
Cantidad de unidades: Como mínimo puede ser 1, y como máximo 6 unidades✔️
Precio por unidad de producto: 100 pesos es el precio mínimo y 450 es el máximo precio
disponible POR UNIDAD.✔️
El método de pago: Crédito, Débito, Efectivo o MercadoPago✔️
Coto nos pidió que solamente realizáramos la carga de 10 productos para ser ofertados✔️
durante el fin de semana, informar:
1) El total que se recaudaría con la venta de todas las ofertas✔️
2) El precio bruto de cada oferta ✔️
3) Del producto COMESTIBLE más barato: nombre y precio✔️
4) De la BEBIDA más cara: nombre y cantidad de unidades✔️
5) El precio final de cada oferta teniendo en cuenta los siguientes descuentos:
	A) Si paga con efectivo: 45% de descuento 
	B) Si paga con tarjeta de crédito: 15% de aumento
	C) Si paga con debito el precio se mantiene igual
	D) Si paga con MercadoPago: 5% de descuento
*/

function mostrar() {
  var producto;
  var cantidadDeUnidades;
  var precioPorUnidadDeProducto;
  var metodoDePago;
  var contador;
  var acumuladorPrecioTotal;
  var precioBrutoProducto;
  var minProductoComestible;
  var nombreProductoMinimo;
  var banderaMinimo;
  var bebidaMaximo;
  var nombreBebidaMaxima;
  var unidadesBebidaMaxima;
  var banderaMaximo;
  var descuento;
  var precioConDescuento;
  
  
  contador = 0;
  banderaMinimo = 0;
  banderaMaximo = 0;
  acumuladorPrecioTotal = 0;

  while (contador < 2) {
    producto = prompt("ingrese un producto");
    while (producto != "fideos" && producto != "galletitas" && producto != "harina" &&producto != "jugo" &&producto != "vino") 
    {
      producto = prompt(
        "ingrese algo valido como fideos galletitas harina jugo o vino"
      );
    }
    cantidadDeUnidades = prompt("ingrese la cantidad de unidades");
    cantidadDeUnidades = parseInt(cantidadDeUnidades);
    while (cantidadDeUnidades < 1 || cantidadDeUnidades > 6) {
      cantidadDeUnidades = prompt("ingrese una cantidad valida del 1 al 6");
      cantidadDeUnidades = parseInt(cantidadDeUnidades);
    }
    precioPorUnidadDeProducto = prompt("ingrese el precio del producto");
    precioPorUnidadDeProducto = parseInt(precioPorUnidadDeProducto);
    while (precioPorUnidadDeProducto < 100 || precioPorUnidadDeProducto > 450) {
      precioPorUnidadDeProducto = prompt(
        "ingrese un precio valido del 100 al 450"
      );
      precioPorUnidadDeProducto = parseInt(precioPorUnidadDeProducto);
    }
    metodoDePago = prompt("ingrese el metodo de pago");

    while (
      metodoDePago != "credito" &&
      metodoDePago != "debito" &&
      metodoDePago != "efectivo" &&
      metodoDePago != "MercadoPago"
    ) {
      metodoDePago = prompt("reingrese un metodo de pago valido");
    }
    precioBrutoProducto = precioPorUnidadDeProducto * cantidadDeUnidades;
    acumuladorPrecioTotal = acumuladorPrecioTotal + precioBrutoProducto;


    if (producto == "fideos" || producto == "galletitas" || producto == "harina") 
    {
    	if(banderaMinimo == 0 || precioPorUnidadDeProducto < minProductoComestible)
    	{
    		minProductoComestible = precioPorUnidadDeProducto;
    		nombreProductoMinimo = producto;
    		banderaMinimo = 1;
    	}
    }
    else
    {
    	if(banderaMaximo == 0 || precioPorUnidadDeProducto > bebidaMaximo)
    	{
    		bebidaMaximo = precioPorUnidadDeProducto;
    		nombreBebidaMaxima = producto;
    		unidadesBebidaMaxima = cantidadDeUnidades;
    		banderaMaximo = 1;
    	}
    }


    switch(metodoDePago)
    {
    	case "efectivo":
    		descuento = 0.55;
    	break;
    	case "credito":
    		descuento = 1.15;
    	break;
    	case "debito":
    		descuento = 1;
    	break;
    	case "MercadoPago":
    		descuento = 0.95;
    	break;
    }


    precioConDescuento = precioBrutoProducto * descuento;
    alert("el precio bruto de " + producto + " es " + precioBrutoProducto + " El precio de la oferta con descuento es de " + precioConDescuento);

    contador++;
  }

  document.write(
    " El total que se recaudaría con la venta de todas las ofertas es " +
      acumuladorPrecioTotal +
      "<br>");
  document.write("El producto COMESTIBLE más barato es:" + nombreProductoMinimo + " y su precio es: " + minProductoComestible + "<br>");
  document.write("El nombre de la bebida mas cara es: " + nombreBebidaMaxima + " y su cantidad de unidades es: " + unidadesBebidaMaxima + "<br>");
}

