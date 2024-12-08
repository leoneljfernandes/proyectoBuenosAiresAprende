// Dee clase 9 y 10

/*
let a = prompt("Ingrese un nro 1: ", "");
let b = prompt("Ingrese un nro 2: ", "");

a = parseInt(a);
b=parseInt(b);
console.log("a+b:", a+b);

console.log("a-b:", a-b);

console.log("a*b:", a*b);
console.log("a/b:", a/b);
*/
/*
let nombre = prompt("Ingrese un nombre: ", "");
let edad = prompt("Ingrese la edad de " + nombre + ": ", "");

nombre = toString(nombre);

if(edad>18){
    console.log(nombre + "Es mayor de edad");
}else{
    console.log(nombre + "No es mayor de edad");
}

*/

/*
let nombre = prompt("Ingrese un nombre: ", "");
let id = prompt("Ingrese su id:", "");

id = parseInt(id);

let listaId = [0,1,2,3,4,5,6,7,8,9];

if(listaId.includes(id)){
    console.log("Acceso autorizado " + nombre + " es miembro VIP");
}else{
    console.log("Acceso denegado");
}

*/

/*
let productos = [
    { nombre: "Producto 1", precio: 100, descuento: true },
    { nombre: "Producto 2", precio: 200, descuento: false },
    { nombre: "Producto 3", precio: 300, descuento: true },
    { nombre: "Producto 4", precio: 150, descuento: false },
    { nombre: "Producto 5", precio: 250, descuento: true }
];

let productosConDescuento = 0;
let productosSinDescuento = 0;

console.log("Productos con descuento");
productos.forEach(producto=> {
    if(producto.descuento == true){
        productosConDescuento++;
        console.log(`- ${producto.nombre} ($${producto.precio})`);
    }else{
        productosSinDescuento++;
    }
}
)

console.log(`Productos con descuento: ${productosConDescuento}`);
console.log(`Productos sin descuento: ${productosSinDescuento}`);
*/

// Clase 11
/*
function verificarEdad(nombre, edad){
    if(edad>=18){
        console.log(`${nombre} es mayor de edad`);
    }else{
        console.log(`${nombre} es menor de edad`);
    }
}

var nombre = prompt("Ingrese un nombre: ", "");
var edad = prompt("Ingrese su edad:", "");

verificarEdad(nombre, edad);
*/
function calcularPrecio(precio, iva){
    if(iva!=0){
        let total = precio + (precio*(iva/100));
        console.log(`El precio del producto sin IVA es ${precio}`);
        console.log(`El precio total del producto con IVA es ${total}`);
    }else{
        console.log(`El precio del producto sin IVA es ${precio}`);
    }
}

var precio = parseFloat(prompt("Ingrese precio: ",""));
var iva = parseFloat(prompt("Si desea ingresar el valor de IVA ingrese un nro, de lo contrario ingrese 0: ",""));

calcularPrecio(precio, iva);