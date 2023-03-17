//Bienvenida
alert('Bienvenido a Valhalla Digital')
alert('cargue su mail para recibir su factura')



let userEmail = ''
let confirmUserEmail = ''
let askAgain = true

do {
    
    userEmail = prompt('Ingrese su correo electrónico:')
    confirmUserEmail = prompt('Confirme su correo electrónico:')

   
    if (userEmail === confirmUserEmail) {
        alert('El correo '+userEmail+' ha sido registrado con éxito!')
        askAgain = false
    } else {
        alert('Los correos deben de ser iguales!')
    }
} while (askAgain)

const compraProducto = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false 

    do {
        producto = prompt('¿Queres comprar gift card de playstation, nintendo, o xbox?')
        alert('Con su compra mayor a $15000 tiene el 20% de descuento y envio gratis')
        cantidad = parseInt(prompt('¿Cuantas queres?'))
        
        
        let cantidadValidada = validarCantidad(cantidad)

        switch (producto) {
            case 'playstation':
                precio = 5000
                break
            case 'nintendo':
                precio = 5000
                break
            case 'xbox':
                precio = 5000
                break
        
            default:
                alert('Alguno de los datos no es correcto')
                precio = 0
                cantidadValidada = 0
                break
        }

        subtotal += precio * cantidadValidada

        seguirComprando = confirm('¿Queres alguna gift card mas?')
    } while (seguirComprando)

    return subtotal 

}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Debe agregar una cantidad valida!')
        cantidad = parseInt(prompt('¿Cuantas queres?'))
    }

    return cantidad
}
const aplicarDescuento = (subtotal) => {
    
    const descuento = 0.85
    if ( subtotal >= 14000){
        return subtotal * descuento
        alert('A esta compra se le aplica el 20% de descuento') //porcentuaje de descuento
    } else {
        return subtotal
    }

}

const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm('¿Queres envio a domicilio?')

    if (quiereEnvio && subtotal >=14000) {
        alert('Tenes envio gratis por gastar $'+subtotal)
    } else if (quiereEnvio && subtotal < 14000) {
        subtotal +=1000
        alert('El costo de envio es de $1000. El total mas envio es: $'+subtotal)
    } else {
        alert('El total de tu compra es: $'+subtotal)
    }
    return subtotal

}

const mostrarTotalDeLaCompra = (precioFinal) => {
    alert('El total a pagar es de $'+precioFinal+ '. Gracias por su compra!')
}

const subtotal = compraProducto()

const subtotalConDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)

mostrarTotalDeLaCompra(precioFinal)
