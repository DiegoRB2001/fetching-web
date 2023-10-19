export async function getProducts () {
    const response = await fetch('https://dummyjson.com/products');
    if(!response.ok) throw new Error('Ha ocurrido un error');
    return response.json();
}

export async function getProduct(id){
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if(!response.ok) throw new Error('Ha ocurrido un error');
    return response.json();
}