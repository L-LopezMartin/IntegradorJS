// Categoria

import { categoriaActiva } from "../../main";
import { handleGetProductLS } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) =>{
    const products = handleGetProductLS();
    switch (categoryIn){
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas" :
        case "Papas" :
        case "Gaseosas" :
            const result = products.filter((el)=> el.categoria === categoryIn)
            handleRenderList(result);
        default:
            break;
        case "MayorPrecio":
            const resultMayPrecio = products.sort((a,b)=>b.precio - a.precio);
            handleRenderList(resultMayPrecio);
            break;
        case "MenorPrecio":
            const resultMenPrecio = products.sort((a,b)=>a.precio - b.precio);
            handleRenderList(resultMenPrecio);
            break;
    }
}

//render de la vista categorías

export const renderCategories = () => {
    const uList = document.getElementById("listFilter");
    uList.innerHTML = `
    <li id="Todo"> Todos los productos </li>
    <li id="Hamburguesas"> Hamburguesas </li>
    <li id="Papas"> Papas </li>
    <li id="Gaseosas"> Gaseosas </li>
    <li id="MayorPrecio"> Mayor Precio </li>
    <li id="MenorPrecio"> Menor Precio </li>
    `;
    const liElements = uList.querySelectorAll("li");
    liElements.forEach((element)=>{
        element.addEventListener("click", () =>{
            handleClick(element);
        });
    });
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((element) => {
            if(element.classList.contains('liActive')){
                element.classList.remove('liActive');
            } else {
                if (elemento === element){
                    element.classList.add('liActive');
                }
            }
        });
    };
};