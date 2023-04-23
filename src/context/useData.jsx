import { useContext } from "react";
import { dataContext } from "./dataContext";

//Custom hook para uso do contexto
export const useData = () => {
    const contexto = useContext(dataContext);
    return contexto;
}