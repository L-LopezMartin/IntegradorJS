// ====== PRODUCTO

import { productoActivo } from "../../main";
import { handleGetProductLS, setInLS } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import Swal from 'sweetalert2';



//guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});


const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("name").value;
    const img = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;

    let object = null;
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria
        }
    } else{
        object = {
            id: new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria
        };
    }
    Swal.fire({
        title: "Éxito!",
        text: "Producto guardado exitosamente!",
        icon: "success"
      });
    setInLS(object);
    handleGetProductsToStore();
    closeModal();
}

//eliminar elemento
export const handleDeleteProduct = () =>{
    Swal.fire({
        title: "¿Está seguro?",
        text: "Esta acción no puede ser revertida",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLS();
            console.log(products);
            const result = products.filter((el) => 
                el.id !== productoActivo.id
            );
            console.log(result);
            // Settear nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLS();
            handleRenderList(newProducts);
            closeModal();
          Swal.fire({
            title: "Eliminado!",
            text: "El producto ha sido eliminado.",
            icon: "success"
          });
        } else {
            closeModal();
        }
      });
      
}