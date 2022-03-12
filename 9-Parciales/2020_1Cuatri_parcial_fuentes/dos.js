/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
    let productoConstruccion;
    let cantidadBolsas;
    let precioBolsa;
    let bolsasTotal;
    let respuesta;
    let precioBruto;
    let acumuladorCal;
    let acumuladorArena;
    let acumuladorCemento;
    let precioCal;
    let precioCemento;
    let precioArena;
    let mensaje;
    let descuento;
    let precioDescuento;
    let mayorCantidadBolsas;
    let precioMasCaro;
 
    descuento = 0;
    acumuladorCal = 0;
    acumuladorArena = 0;
    acumuladorCemento = 0;
    precioCal = 0;
    precioArena = 0;
    precioCemento = 0;

    respuesta = true;

    while(respuesta == true)//preguntamos cuantos productos se ingresan hasta que el usuario no quiera mas
    {
        //pedimos datos y los validamos
        productoConstruccion = prompt("Ingrese su producto de construccion:");
        while(productoConstruccion != "arena" && productoConstruccion != "cal" && productoConstruccion != "cemento")
        {
            productoConstruccion = prompt("Producto no valido,reingrese su producto");
        }

        cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
        cantidadBolsas = parseInt(cantidadBolsas);

        precioBolsa = prompt("Ingrese el precio de unidad de bolsa");
        precioBolsa = parseInt(precioBolsa);
        while(precioBolsa < 0)
        {
            precioBolsa = prompt("reingrese su precio");
            precioBolsa = parseInt(precioBolsa);
        }
        //acumulamos los productos y sacamos sus precios dependiendo el tipo
        switch(productoConstruccion)
        {
            case "cal":
                acumuladorCal = acumuladorCal + cantidadBolsas;
                precioCal = precioCal + (cantidadBolsas * precioBolsa);
            break;
            case "cemento":
                acumuladorCemento = acumuladorCemento + cantidadBolsas;
                precioCemento = precioCemento + (cantidadBolsas * precioBolsa);
            break;
            case "arena":
                acumuladorArena = acumuladorArena + cantidadBolsas;
                precioArena = precioArena + (cantidadBolsas * precioBolsa);
            break;
        }

        respuesta = confirm("Quiere seguir ingresando productos?");//confirm para que aparezca aceptar o cancelar (bucle)
    }

    bolsasTotal = acumuladorArena + acumuladorCal + acumuladorCemento;//bolsastotal

    precioBruto = precioCal + precioCemento + precioArena;//preciobruto

    mensaje = "El importe total bruto es : " + precioBruto;

    //aplicamos los descuentos segun la cantidad de bolsas indicada x la consigna
    if(bolsasTotal > 30)
    {
        descuento = 25;
    }
    else
    {
        if(bolsasTotal > 10)
        {
            descuento = 15;
        }
        else
        {
            descuento = 0;
        }
    }

    //agregamos esto para que aparezca el descuento unicamente si hay descuento
    if(descuento != 0)
    {
        precioDescuento = precioBruto - (precioBruto * descuento / 100);
        mensaje = mensaje + "\n" + "El importe a pagar con descuento es: " + precioDescuento;
    }

    //comparamos valores para saber cual es el mayor(cantidad de bolsas)
    if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
    {
        mayorCantidadBolsas = "arena";
    }
    else
    {
        if(acumuladorCal > acumuladorCemento)
        {
            mayorCantidadBolsas = "cal";
        }
        else
        {
            mayorCantidadBolsas = "cemento";
        }
    }

    //comparamos valores para saber cual es el mayor(precio)
    if(precioCal > precioArena && precioCal > precioCemento)
    {
        precioMasCaro = "cal";
    }
    else
    {
        if(precioArena > precioCemento)
        {
            precioMasCaro = "arena";
        }
        else
        {
            precioMasCaro = "cemento";
        }
    }
    mensaje = mensaje + "\n" + "La mayor cantidad de bolsas es de: " + mayorCantidadBolsas + "\n"
    + "El tipo mas caro es: " + precioMasCaro; 
    alert(mensaje);
}


