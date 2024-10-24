// LOCAL STORAGE

//traer productos de local storage
export const handleGetProductLS = () =>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else {
        return [];
    }
};

//guardar en local storage

//recibir un producto
export const setInLS = (productIn) => {
    //traer elementos
    let productsInLS = handleGetProductLS();
    const existingIndex = productsInLS.findIndex((productsLocal)=>
        productsLocal.id === productIn.id
    );
    // verificar si el elemento existe
    if (existingIndex !== -1){
        // si existe debe reemplazarse
        productsInLS[existingIndex] = productIn;
    } else {
        // si no agregarse
        productsInLS.push(productIn);
    }
    // Settear nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLS));
};