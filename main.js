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