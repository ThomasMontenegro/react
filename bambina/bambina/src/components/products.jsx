
const products = [
    {
        id: 1,
        nombre: "Vela",
        precio: 180,
        imagen: "https://chufasustentable.com/1613-large_default/vela-de-soja-the.jpg",
        descripcion: "velas aromaticas de soja contamos con mas de 15 fragancias para que te enamores",
        category: "velas",
        stock: 10
    },

    {
        id: 2,
        nombre: "Almohadon",
        precio: 250,
        imagen: "https://gpdiseno.com.ar/wp-content/uploads/2018/09/almohadon-unicornio-gp-diseno-500x487.jpg",
        descripcion: "almohadones animados super comodos",
        category: "almohadones",
        stock:5
    },
    {
        id:3,
        nombre:"Mate",
        precio: 150,
        imagen: "http://http2.mlstatic.com/D_615097-MLA40077287586_122019-O.jpg",
        descripcion: "los mates mas coloridos! mas de 20 diseños personalizados",
        category: "mates",
        stock:15

    }
]


export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (producto) => producto.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 300);
    });
};

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        const productoElegido = products.find(
            (producto) => producto.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoElegido);
        }, 1000);
    });
};

