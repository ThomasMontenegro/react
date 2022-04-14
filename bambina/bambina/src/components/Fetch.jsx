import productos from "./productos";


const Fetch = (categoryId) => {
    return new Promise ((resolve, reject) =>{
        const productoFiltrados = productos.filter((producto)=>producto.category === categoryId)
        setTimeout(() => {
            if (categoryId) {
                resolve(productoFiltrados);
            } else {
                resolve(productos);
            }
}, 2000)})};

export default Fetch;



 export const FetchDetail = (id) => {
    return new Promise ((resolve, reject) =>{
        const productoDetallado= productos.find((producto)=> producto.id === parseInt(id))
        setTimeout(() => {
              resolve(productoDetallado);
}, 1000)})};
