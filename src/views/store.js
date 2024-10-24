// Store

import { setProductoActivo } from "../../main";
import { handleGetProductLS } from "../persistence/localStorage";
import { openModal } from "./modal";



//Traemos los elementos (handleGetProductsLS) y los renderizamos (handleRenderList)
export const handleGetProductsToStore = () => {
    const products = handleGetProductLS();
    handleRenderList(products);
}


//Filtra todos los elementos y luego los renderiza
export const handleRenderList =(productosIn)=>{

    //Filtrado por categoría
    const papas = productosIn.filter((el)=>el.categoria === 'Papas');
    const gaseosas = productosIn.filter((el)=>el.categoria === 'Gaseosas');
    const hams = productosIn.filter((el)=>el.categoria === 'Hamburguesas');


    //Renderizado de elementos
    const renderProductGroup = (productos, title) =>{
        if(productos.length >0){
            //Creamos cada elemento en un div
            const productosHTML = productos.map((producto, index)=>{
                return`
                <div id='product-${producto.categoria}-${index}' class='productCard'>
                <img src=${producto.img}/>
                <h2>${producto.nombre}</h2>
                <p><b>Precio: </b>$${producto.precio}</p>
                <p><b>Categoría: </b>${producto.categoria}</p>
                </div>
                `;
            });
            //retorna la sección con todos los elementos
            return`
            <section class='productCategory'>
            <h3>${title}</h3>
            <div class='containerProduct'>
            ${productosHTML.join("")}
            </div>
            </section>
            `
        }
        else{
            return "";
        }
    };
    

    //Renderizar cada categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(hams,"Hamburguesas")}
        ${renderProductGroup(papas,"Papas")}
        ${renderProductGroup(gaseosas,"Gaseosas")}
    `

    //Se añaden los eventos a cada producto de manera dinámica
    const addEvents = (productosIn) =>{
        if (productosIn){
            productosIn.forEach((product, index) => {
                const productContainer = document.getElementById(`product-${product.categoria}-${index}`);
                productContainer.addEventListener('click', () => {
                    setProductoActivo(product);
                    openModal();
                });
            });
        }
    }
    addEvents(hams);
    addEvents(papas);
    addEvents(gaseosas);
}