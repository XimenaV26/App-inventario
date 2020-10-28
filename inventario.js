import Producto from "./producto.js"

export default class Inventario {
    constructor(){
        this.product = new Array()
    }

    agregarProduct(Producto){
        let posicion = this.product.length 
        if(posicion < 20){
            this.product[posicion] = Producto 
            return true
        }
        

        }

    }
