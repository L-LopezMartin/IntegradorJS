import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

// === Popup
let cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener('click', () => {
    handleCancelButton(); 
});

const handleCancelButton =  () => {
    closeModal();
}

// === Modal
export const openModal = () => {
    const modal = document.getElementById("modalPopup");
    modal.style.display = "flex";
    
    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

    if(productoActivo){ 
        const nombre = document.getElementById("name");
        const img = document.getElementById("img");
        const precio = document.getElementById("precio");
        const categoria = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
}
export const closeModal = () => {
    const modal = document.getElementById("modalPopup");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
}

const resetModal = () => {
    const nombre = document.getElementById("name");
    const img = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categoria = document.getElementById("categoria");
    nombre.value = "";
    img.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoría";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', () => {
    handleButtonDelete();
})
const handleButtonDelete = () => {
    handleDeleteProduct();
}