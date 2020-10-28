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

        borrarProducto(codigo){
            let i = 0 
            while(i < this.product.length && this.product[i].setCodigo() != codigo){
                i++
            }
            if(i > this.product.length){
                return false
            } else {
                this.product[i] = null
                do {
                    this.product[i] = this.product[i + 1]
                    i++
                } while( i < this.product.length)
                this.product.pop()
                return true
            }

        }

        buscarProducto(codigo){
            let i = 0
        while( i < this.product.length && this.product[i].setCodigo != codigo){
            i++ 
        }
        if(i < this.product.length){
            return this.product[i].descripcion()
        } else {
            return false
        }       
    }

    }
