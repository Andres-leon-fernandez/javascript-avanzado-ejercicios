/*
Un arreglo carrito vacío y un catálogo de productos (con id, nombre, precio).
Funciones:
•	agregarAlCarrito(id, cantidad) → Busca el producto y agrégalo al carrito.
•	mostrarCarrito() → Lista los productos en el carrito con subtotal por cada uno.
•	totalCarrito() → Muestra el precio total de la compra.
*/

let myStore = [
    { id: 1, nombre: "Arroz 1kg", precio: 5.5, stock: 30, activo: true },
    { id: 2, nombre: "Azúcar 1kg", precio: 4.8, stock: 25, activo: true },
    {
        id: 3,
        nombre: "Aceite Vegetal 1L",
        precio: 9.9,
        stock: 20,
        activo: true,
    },
    {
        id: 4,
        nombre: "Fideos Spaghetti 500g",
        precio: 3.5,
        stock: 40,
        activo: true,
    },
    { id: 5, nombre: "Leche Evaporada", precio: 4.2, stock: 35, activo: true },
    { id: 6, nombre: "Pan de Molde", precio: 7.5, stock: 15, activo: true },
    { id: 7, nombre: "Huevos (docena)", precio: 9.0, stock: 18, activo: true },
    { id: 8, nombre: "Pollo Entero", precio: 18.5, stock: 10, activo: true },
    {
        id: 9,
        nombre: "Carne Molida 500g",
        precio: 14.9,
        stock: 12,
        activo: true,
    },
    { id: 10, nombre: "Manzana (kg)", precio: 6.8, stock: 20, activo: true },
    { id: 11, nombre: "Plátano (kg)", precio: 5.2, stock: 22, activo: true },
    { id: 12, nombre: "Papas (kg)", precio: 3.8, stock: 50, activo: true },
    { id: 13, nombre: "Cebolla (kg)", precio: 4.0, stock: 45, activo: true },
    { id: 14, nombre: "Tomate (kg)", precio: 6.5, stock: 30, activo: true },
    { id: 15, nombre: "Sal 1kg", precio: 2.5, stock: 60, activo: true },
    {
        id: 16,
        nombre: "Galletas de Soda",
        precio: 3.2,
        stock: 40,
        activo: true,
    },
    { id: 17, nombre: "Refresco 1.5L", precio: 6.0, stock: 25, activo: true },
    { id: 18, nombre: "Agua Mineral 2L", precio: 4.5, stock: 30, activo: true },
    {
        id: 19,
        nombre: "Jabón de Tocador",
        precio: 2.8,
        stock: 50,
        activo: true,
    },
    {
        id: 20,
        nombre: "Detergente en Polvo 1kg",
        precio: 8.9,
        stock: 22,
        activo: true,
    },
];

let carrito = [];

//funciones de tienda
function MostraProductos() {
    for (let producto of myStore) {
        if (producto.activo) {
            console.log(
                `Id: "${producto.id}" || Nombre "${producto.nombre}" || Precio: "${producto.precio}" || Stock: "${producto.stock}"`
            );
        }
    }
}

//funciones de carrito
//agregar a carrito
function agregarAlCarrito(id, cantidad) {
    for (let producto of myStore) {
        if (producto.id === id) {
            if (!producto.activo) {
                console.log("Producto no disponible");
                return;
            }
            if (producto.stock >= cantidad) {
                let productoParaCarrito = {
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: cantidad,
                    precioPagar: producto.precio * cantidad,
                };
                carrito.push(productoParaCarrito);
                producto.stock -= cantidad;

                if (producto.stock === 0) {
                    producto.activo = false;
                }
                console.log("Producto registrado de manera correcta");
            } else {
                console.log("Cantidad en stock insuficiente para la orden");
            }
            return;
        }
    }
    console.log("producto no encontrados");
}

function mostrarCarrito() {
    for (let productoEnCarrito of carrito) {
        console.log(
            `ID: "${productoEnCarrito.id}" || Nombre: "${productoEnCarrito.nombre}" ||Precio Unitario: "${productoEnCarrito.precio}" || Cantidad: "${productoEnCarrito.cantidad} || Precio a Pagar "${productoEnCarrito.precioPagar}" `
        );
    }
}

function totalCarrito() {
    return carrito.reduce((acum, producto) => acum + producto.precioPagar, 0);
}

MostraProductos();

agregarAlCarrito(1, 20);
agregarAlCarrito(2, 25);
agregarAlCarrito(10, 20);

mostrarCarrito();

console.log(`Precio final del carrito ${totalCarrito()}`);
/*
let num = prompt("da un numero");
console.log(`el numero fue ${num}`);
*/
MostraProductos();
