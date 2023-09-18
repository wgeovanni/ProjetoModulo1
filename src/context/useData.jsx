import { useContext } from "react";
import { dataContext } from "./DataContext";

//Custom hook para uso do contexto
export const useData = () => {
    const contexto = useContext(dataContext);
    return contexto;
}