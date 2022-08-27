let  = prompt('******factura*******')
let names = prompt(' nombre del cliente ')
let subjects = prompt('Ingrese el nombre del producto ')
let cantidad = prompt('Ingrese la cantidad del producto')
let price = prompt('Ingrese valor del producto')
let descuento = prompt('tiene descuento')
/*let compra = prompt('seguir comprando?')

while (compra='yes') {
    let  = prompt('******factura*******')
    let names = prompt(' nombre del cliente ')
    let subjects = prompt('Ingrese el nombre del producto ')
    let cantidad = prompt('Ingrese la cantidad del producto')
    let price = prompt('Ingrese valor del producto')
    let descuento = prompt('tiene descuento')
    let compra = prompt('seguir comprando?')
}
else while (compra='no') {

}*/
if (descuento="si") {
    subtotal = Number(cantidad) * Number(price)
    subtotal = subtotal* .10 + 4000}
else if (descuento="no") {
   subtotal = Number(cantidad) * Number(price)
subtotal = subtotal +4000}

total = subtotal
alert('hola ' + names + '. porfavor paga ' + total)