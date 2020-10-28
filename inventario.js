var codigo = document.getElementById("codigo")
var nombre = document.getElementById("nombre")
var descripcion = document.getElementById("descrip")
var cantidad = document.getElementById("cantidad")
var costo = document.getElementById("costo")
var borrarC = document.getElementById("borrarCode")
var buscarC = document.getElementById("buscarCode")

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

    listarProductos(){
        let i = 0
        let lista = document.querySelector('#listaForm')
        while(i < this.product.length){
            let objeto = document.createElement('li')
            objeto.textContent = this.product[i].descripcion()
            lista.appendChild(objeto)
            i++
        }
        if (i < this.product.length){
            return false
        }else{
            return true
        }

    }

    listarInvertido(){
        if (this.product.length != 0) {
            let i = this.product.length -1
            let lista = document.querySelector('#listaForm02')
            while(i < this.product.length){
                let objeto = document.createElement('li')
                objeto.textContent = this.product[i].descripcion()
                lista.appendChild(objeto)
                i--
        }
        return true
    }else {
        return false 
    }

    } 

    mostrar(){
        for(let i = 0; i < this.product.length; i++){
            console.log(this.product[i].descripcion())
        }
    }
}

var Almacen = new Inventario()
    btnAgregar.addEventListener('click', () => {
        let newProduct = new Producto(codigo.value, nombre.value, descripcion.value, cantidad.value, costo.value)
        if (Almacen.addProduct(newProduct) === true) {
            alert('Producto guardado')
            Almacen.mostrar()
        } else {
            alert('Producto no guardado no hay espacio')
        }
    })
    
    btnBorrar.addEventListener('click', () => {
        if (Almacen.delateProduct(borrarC.value) === true) {
            alert('Producto eliminado')
            Almacen.mostrar()
        } else {
            alert('Producto no encontrado')
        }
    })
    btnBuscar.addEventListener('click', () => {
        if (Almacen.buscar(buscarC.value) === false) {
            alert('Producto no encontrado')
        } else {
            console.log(Almacen.buscar(buscarC.value))
        }
    })
    btnRecuperar.addEventListener('click', () => {
        if (Almacen.listar() === false) {
            alert('No hay productos que mostrar')
        } else {
            alert('producto mostrado')
        }
    })
    btnRecuperarI.addEventListener('click', () => {
        if (Almacen.listarInver() === false) {
            alert('No hay productos que mostrar')
        } else {
            alert('producto mostrado')
        }
    })
