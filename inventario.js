import Producto from "./producto.js"

export default class Inventario {
    constructor(){
        this.inventario = new Array(20)
    }

    agregar(productoNuevo, posicion){
        if(this.inventario[posicion] == null){

            this.inventario[posicion] = productoNuevo
            console.log("Se agrego el producto con exito")
        } else{
            
            console.log("Ya esta ocupado")
        }

        }

        borrarCodigo(codigo){
            for(let i = 0; i < 20; i++){

                if(this.inventario[i] == null){
            
                }else if(this.inventario[i].codigo == codigo){
                    this.inventario[i] = null
                    console.log("Se elimino el producto")
                    break

                }

            }

        }
    }
