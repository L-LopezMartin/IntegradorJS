import { handleGetProductLS } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSarchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLS();

    const result = products.filter((el) => 
        el.nombre.toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
}