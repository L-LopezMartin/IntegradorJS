import { renderCategories } from "./src/services/categories";
import { handleSarchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";

import './style.css'
renderCategories();

// Aplicacion

export let categoriaActiva = null;
export let setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export let setProductoActivo = (productoIn) =>{
    productoActivo = productoIn;
}
handleGetProductsToStore();
renderCategories();


// === Header

// Add Product
let buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener('click', () => {
    openModal();
});

//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', ()=>{
    handleSarchProductByName();
});