let tCarrito = 0
class Producto{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}
let capia = new Producto("Capias",400)
let bunuelo = new Producto ("Buñuelo",500)
let rosquete = new Producto ("Rosquete",1000)
let gaznate = new Producto("Gaznate salteño",150)
let empanadilla = new Producto("Empanadilla",350)
let turronSalte = new Producto("Turron Salteño",4000)

const arrayMasitasReg = [capia,bunuelo,rosquete,gaznate,empanadilla,turronSalte]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayMasitasReg[0].nombre} por $${arrayMasitasReg[0].precio}\nPulse 2 si desea llevar un ${arrayMasitasReg[1].nombre} por $${arrayMasitasReg[1].precio}\nPulse 3 si desea llevar un ${arrayMasitasReg[2].nombre} por $${arrayMasitasReg[2].precio}\nPulse 4 si desea llevar un ${arrayMasitasReg[3].nombre} por $${arrayMasitasReg[3].precio}\nPulse 5 si desea llevar un ${arrayMasitasReg[4].nombre} por $${arrayMasitasReg[4].precio}\nPulse 6 si desea llevar un ${arrayMasitasReg[5].nombre} por $${arrayMasitasReg[5].precio}\n`))


while (opciones < 1 || opciones > 6){
    opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayMasitasReg[0].nombre} por $${arrayMasitasReg[0].precio}\nPulse 2 si desea llevar un ${arrayMasitasReg[1].nombre} por $${arrayMasitasReg[1].precio}\nPulse 3 si desea llevar un ${arrayMasitasReg[2].nombre} por $${arrayMasitasReg[2].precio}\nPulse 4 si desea llevar un ${arrayMasitasReg[3].nombre} por $${arrayMasitasReg[3].precio}\nPulse 5 si desea llevar un ${arrayMasitasReg[4].nombre} por $${arrayMasitasReg[4].precio}\nPulse 6 si desea llevar un ${arrayMasitasReg[5].nombre} por $${arrayMasitasReg[5].precio}\n`))

}
let proElegido;
if (opciones == 1){
    proElegido = arrayMasitasReg[0]
    tCarrito += arrayMasitasReg[0].precio
}
else if(opciones == 2){
    proElegido = arrayMasitasReg[1]
    tCarrito += arrayMasitasReg[1].precio
}
else if(opciones == 3){
    proElegido = arrayMasitasReg[2]
    tCarrito += arrayMasitasReg[2].precio
}
else if(opciones == 4){
    proElegido = arrayMasitasReg[3]
    tCarrito += arrayMasitasReg[3].precio
}
else if(opciones == 5){
    proElegido = arrayMasitasReg[4]
    tCarrito += arrayMasitasReg[4].precio
}
else if(opciones == 6){
    proElegido = arrayMasitasReg[5]
    tCarrito += arrayMasitasReg[5].precio
}
let confirmacion = confirm(`eligió ${proElegido.nombre} a $${proElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó al carrito, desea agregar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total de su compra es de  $${tCarrito}, desea pagar?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra")
            } else{
                alert("muchas gracias por visitar nuestro sitio web")
            }
        }
    } else{
        let confirmacion4 = confirm("desea agregar algo mas?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("muchas gracias por visitar nuestro sitio web")
        }
    }
}

comprar()

