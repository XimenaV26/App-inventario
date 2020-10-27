export default class Producto{
    constructor(codigo,nombre, descripcion, cantidad, costo){

        this.codigo = codigo;
        this.nombre = nombre; 
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo; 
    
    }

    descripcion(){
        return `${this.codigo} -- ${this.nombre} $ ${this.costo} cantidad: ${this.cantidad}`
    }

    codigo(){
        return this.codigo
    }



}