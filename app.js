
let valor = parseInt(prompt("ingrese el valor"))
let iva = 0;
let impPais = 0;
let perGanancias = 0;
let total = 0;

document.writeln(`Calculador de compras al exterior <br>
                  El IVA es de ${calcularIVA(valor)} <br>
                  El impuesto país es de ${calcularImpuestoPais(valor)} <br>
                  La percepción de ganancias es de ${calcularPercepcionGanancias(valor)} <br>
                  La suma de los impuestos es de ${total = iva + impPais + perGanancias} <br>
                  El valor final del artículo es de ${total + valor}
`)

function calcularIVA(precioProducto){
  return iva = precioProducto * 0.21 
}

function calcularImpuestoPais(precioProducto){
  return impPais = precioProducto * 0.08
}

function calcularPercepcionGanancias(precioProducto){
  return perGanancias = precioProducto * 0.35
}

