let acumuladorPrecio = 0
let precioTotal = 0


const productosDisponibles = [
    {nombre:"Avena", precio:100},
    {nombre:"Pan integral", precio:80},
    {nombre:"Barritas", precio:50},
    {nombre:"Granola", precio:70},
    {nombre:"Leche de almendras", precio:90},
]

//Mostramos los productos disponibles y sus precios

const mostrarDatos = productosDisponibles.map((producto => producto.nombre + " $" + producto.precio))
const mostrarPrecios = productosDisponibles.map((producto => producto))
alert("Productos disponibles: " + mostrarDatos.join(", "))

//Damos a elegir al cliente producto y cantidades
let cantidadesAvena = 0
let cantidadesPan = 0
let cantidadesBarritas = 0
let cantidadesGranola = 0
let cantidadesLecheAlmendras = 0
let precioTotalAvena = 0
let precioTotalPan = 0
let precioTotalBarritas = 0
let precioTotalGranola = 0
let precioTotalLecheAlmendras = 0

let elegirProducto = prompt("¿Cuál quiere llevar?")

elegirProductos()

function elegirProductos(){
switch(elegirProducto){
    case productosDisponibles[0].nombre:
        cantidadesAvena += parseInt(prompt("¿Cuántas cantidades?"))
        precioTotalAvena = cantidadesAvena * productosDisponibles[0].precio
        alert("Precio total avena: $" + precioTotalAvena)
        acumuladorPrecio = precioTotalAvena
        let llevarMas = prompt("¿Quiere llevar más?")
        if(llevarMas === "Si"){
            elegirProducto = prompt("¿Cuál quiere llevar?")
            elegirProductos();
        }
        else{
            acumuladorPrecio = precioTotalAvena + precioTotalPan + precioTotalBarritas + precioTotalLecheAlmendras + precioTotalGranola
            alert("Precio total de su compra: $" + acumuladorPrecio)
            let conCuantoAbona = parseInt(prompt("¿Con cuanto abona?"))
            let vuelto = conCuantoAbona - acumuladorPrecio
            alert("Su vuelto es de: $ " + vuelto)
            alert("Gracias por comprarnos")
        }
        break;
    case productosDisponibles[1].nombre:
        cantidadesPan += parseInt(prompt("¿Cuántas cantidades?"))
        precioTotalPan = cantidadesPan * productosDisponibles[1].precio
        alert("Precio total pan: $" + precioTotalPan)
        acumuladorPrecio = precioTotalPan
        let llevarMasPan = prompt("¿Quiere llevar más?")
        if(llevarMasPan === "Si"){
            elegirProducto = prompt("¿Cuál quiere llevar?")
            elegirProductos();
        }
        else{
            acumuladorPrecio = precioTotalAvena + precioTotalPan + precioTotalBarritas + precioTotalLecheAlmendras + precioTotalGranola
            alert("Precio total de su compra: $" + acumuladorPrecio)
            let conCuantoAbona = parseInt(prompt("¿Con cuanto abona?"))
            let vuelto = conCuantoAbona - acumuladorPrecio
            alert("Su vuelto es de: $ " + vuelto)
            alert("Gracias por comprarnos")
        }
        break;
    case productosDisponibles[2].nombre:
        cantidadesBarritas += parseInt(prompt("¿Cuántas cantidades?"))
        precioTotalBarritas = cantidadesBarritas * productosDisponibles[2].precio
        alert("Precio total barritas: $" + precioTotalBarritas)
        acumuladorPrecio = precioTotalBarritas
        let llevarMasBarritas = prompt("¿Quiere llevar más?")
        if(llevarMasBarritas === "Si"){
            elegirProducto = prompt("¿Cuál quiere llevar?")
            elegirProductos();
        }
        else{            
            acumuladorPrecio = precioTotalAvena + precioTotalPan + precioTotalBarritas + precioTotalLecheAlmendras + precioTotalGranola
            alert("Precio total de su compra: $" + acumuladorPrecio)
            let conCuantoAbona = parseInt(prompt("¿Con cuanto abona?"))
            let vuelto = conCuantoAbona - acumuladorPrecio
            alert("Su vuelto es de: $ " + vuelto)
            alert("Gracias por comprarnos")
        }
        break;
        case productosDisponibles[3].nombre:
            cantidadesGranola += parseInt(prompt("¿Cuántas cantidades?"))
            precioTotalGranola = cantidadesGranola * productosDisponibles[3].precio
            alert("Precio total granola: $" + precioTotalGranola)
            acumuladorPrecio = precioTotalGranola
            let llevarMasGranola = prompt("¿Quiere llevar más?")
            if(llevarMasGranola === "Si"){
                elegirProducto = prompt("¿Cuál quiere llevar?")
                elegirProductos();
            }
            else{            
                acumuladorPrecio = precioTotalAvena + precioTotalPan + precioTotalBarritas + precioTotalLecheAlmendras + precioTotalGranola
                alert("Precio total de su compra: $" + acumuladorPrecio)
                let conCuantoAbona = parseInt(prompt("¿Con cuanto abona?"))
                let vuelto = conCuantoAbona - acumuladorPrecio
                alert("Su vuelto es de: $ " + vuelto)
                alert("Gracias por comprarnos")
            }
            break;
        case productosDisponibles[4].nombre:
                cantidadesLecheAlmendras += parseInt(prompt("¿Cuántas cantidades?"))
                precioTotalLecheAlmendras = cantidadesLecheAlmendras * productosDisponibles[4].precio
                alert("Precio total leche de almendras: $" + precioTotalLecheAlmendras)
                acumuladorPrecio = precioTotalLecheAlmendras
                let llevarMasLecheAlmendras = prompt("¿Quiere llevar más?")
                if(llevarMasLecheAlmendras === "Si"){
                    elegirProducto = prompt("¿Cuál quiere llevar?")
                    elegirProductos();
                }
                else{
                    acumuladorPrecio = precioTotalAvena + precioTotalPan + precioTotalBarritas + precioTotalLecheAlmendras + precioTotalGranola
                    console.log("Precio total de su compra: $" + acumuladorPrecio)
                    let conCuantoAbona = parseInt(prompt("¿Con cuanto abona?"))
                    let vuelto = conCuantoAbona - acumuladorPrecio
                    alert("Su vuelto es de: $ " + vuelto)
                    alert("Gracias por comprarnos")
                }
                break;
}
}













