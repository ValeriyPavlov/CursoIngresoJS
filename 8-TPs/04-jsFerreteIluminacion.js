/*	

Pavlov Valeriy DIV Z
TP 4

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*             
// USANDO IF/ELSE.
function CalcularPrecio ()

{
    var cantidadDeLamparas;
    var precioPorLampara;
    var descuento;
    var marca;
    var resultado;
    var precioFinal;
    var ingresosBrutos;
    var impuesto;
    var texto;
    var precioConImpuesto;

 
    precioPorLampara = 35;
    descuento = 0
 
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marca = document.getElementById("Marca").value;
    resultado = cantidadDeLamparas*precioPorLampara;
    ingresosBrutos = 10;
     
 
    if (cantidadDeLamparas > 5)
    {
        descuento = 50;
    }
    else 
    {
        if (cantidadDeLamparas == 5)
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else 
        {
            if (cantidadDeLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if (cantidadDeLamparas == 3)
                {
                    if (marca == 'ArgentinaLuz')
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if (marca == 'FelipeLamparas')
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }
 
 
    precioFinal = resultado - (resultado * descuento / 100);

    if (precioFinal > 119)
    {
        impuesto = precioFinal * ingresosBrutos / 100;
        texto = "Usted pago $" + impuesto + " de IIBB";
        precioConImpuesto = precioFinal + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioConImpuesto;
        alert(texto);
    } 
    else
    {
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    
}
*/

// USANDO SWITCH + IF.

function CalcularPrecio ()
{
    var cantidadDeLamparas;
    var precioPorLampara;
    var descuento;
    var marca;
    var resultado;
    var precioFinal;
    var ingresosBrutos;
    var impuesto;
    var texto;
    var precioConImpuesto;

 
    precioPorLampara = 35;
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marca = document.getElementById("Marca").value;
    resultado = cantidadDeLamparas*precioPorLampara;
    ingresosBrutos = 10;

    
    switch (cantidadDeLamparas)
    {
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 3:
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
            break;  
        case 2:
        case 1:
            descuento = 0;
            break;

        default:
            descuento = 50;
            break;
    }


    precioFinal = resultado - (resultado * descuento / 100);

    if (precioFinal > 120)
    {
        impuesto = precioFinal * ingresosBrutos / 100;
        texto = "Usted pago $" + impuesto + " de IIBB";
        precioConImpuesto = precioFinal + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioConImpuesto;
        alert(texto);
    } 
    else
    {
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
}
