var codigo = document.getElementById("codigo")
var nom = document.getElementById("iptNom")
var desc = document.getElementById("iptDes")
var cant = document.getElementById("iptCant")
var cost = document.getElementById("iptCost")
var codeB = document.getElementById("iptCodeB")
var busCod = document.getElementById("iptBuscar")

import Producto from './producto.js'
import Inventario from './inventario.js'
class Main {
    constructor(){

    }

    testAgregar(){
        let producto1 = new Producto(10, "Gansito", "De chocolate ", 1, 10)
        let producto2 = new Producto(122, "Chocorroles", "Chocorroles marinela", 1, 12)
        let invetario1 = new Inventario()

        invetario1.agregar(producto1, 1)
        invetario1.borrarCodigo(10)
        invetario1.agregar(producto1, 2)
    }
}

let app = new Main()
app.testAgregar()