/*
1. Sistema de Inventario de Tienda

Crea un arreglo de productos con propiedades: id, nombre, precio, stock.
Implementa funciones:

venderProducto(id, cantidad) → Si hay suficiente stock, descuéntalo y muestra el total de la venta.

mostrarStock() → Lista solo productos con stock mayor a 0.

agregarProducto(nombre, precio, stock) → Agrega un nuevo producto con un ID único.
*/

const myTienda = [
    {
        id: 1,
        nombre: "Laptop Lenovo",
        precio: 2500,
        stock: 10,
        disponible: true,
    },
    {
        id: 2,
        nombre: "Mouse Inalámbrico",
        precio: 80,
        stock: 50,
        disponible: true,
    },
    {
        id: 3,
        nombre: "Teclado Mecánico",
        precio: 180,
        stock: 20,
        disponible: true,
    },
    {
        id: 4,
        nombre: "Monitor Samsung 24''",
        precio: 600,
        stock: 15,
        disponible: true,
    },
    {
        id: 5,
        nombre: "Auriculares Bluetooth",
        precio: 150,
        stock: 30,
        disponible: true,
    },
    {
        id: 6,
        nombre: "Disco Duro 1TB",
        precio: 300,
        stock: 25,
        disponible: true,
    },
    { id: 7, nombre: "SSD 500GB", precio: 420, stock: 18, disponible: true },
    { id: 8, nombre: "Impresora HP", precio: 750, stock: 8, disponible: true },
    {
        id: 9,
        nombre: "Cámara Web HD",
        precio: 120,
        stock: 22,
        disponible: true,
    },
    { id: 10, nombre: "Silla Gamer", precio: 900, stock: 12, disponible: true },
    {
        id: 11,
        nombre: "Tablet Samsung",
        precio: 1100,
        stock: 14,
        disponible: true,
    },
    {
        id: 12,
        nombre: "Smartphone Xiaomi",
        precio: 1300,
        stock: 19,
        disponible: true,
    },
    {
        id: 13,
        nombre: "Cargador Universal",
        precio: 60,
        stock: 40,
        disponible: true,
    },
    {
        id: 14,
        nombre: "Proyector Epson",
        precio: 2000,
        stock: 5,
        disponible: true,
    },
    {
        id: 15,
        nombre: "Smartwatch Huawei",
        precio: 500,
        stock: 16,
        disponible: true,
    },
];

// funcion de vender

function venderProducto(id, cantidad) {
    for (let producto of myTienda) {
        if (producto.id === id) {
            if (producto.disponible) {
                if (producto.stock >= cantidad) {
                    producto.stock -= cantidad;
                    let todalVenta = producto.precio * cantidad;
                    console.log(`El producto fue vendido correctamente
                        --------------------------------------
                        ID: "${producto.id}"
                        Nombre: "${producto.nombre}"
                        Precio Unitario:"${producto.precio}"
                        Cantida Pedida: "${cantidad}"
                        --------------------------------------
                        Precio Total: "${todalVenta}"
                        
                `);
                    if (producto.stock == 0) {
                        producto.disponible = false;
                    }
                } else {
                    console.log(`Stock insuficiente para el producto deseado
                        --------------------------------------
                        ID: "${producto.id}"
                        Nombre: "${producto.nombre}"
                        Stock Actual:"${producto.stock}"
                        Stock Pedido: "${cantidad}"
                `);
                }
                return;
            }
        }
    }
    console.log("producto no encontrado");
}

//mostrarStock()

function mostrarStock() {
    for (let producto of myTienda) {
        if (producto.disponible) {
            console.log(
                `ID:"${producto.id}" -- Producto: "${producto.nombre}" -- Precio: "${producto.precio}" -- Stock: "${producto.stock}"`
            );
        }
    }
}

//pruebas

function agregarProducto(nombre, precio, stock) {
    let producto = {
        id: myTienda.length + 1,
        nombre: nombre,
        precio: precio,
        stock: stock,
        disponible: true,
    };
    return myTienda.push(producto);
}

venderProducto(13, 20);
mostrarStock();
venderProducto(13, 20);
mostrarStock();

agregarProducto("lapiz", 25.0, 15);

mostrarStock();

agregarProducto("papel", 2.0, 15);

mostrarStock();
