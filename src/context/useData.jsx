import { useContext } from "react";
import { dataContext } from "./dataContext";

export const useData = () => {
    const contexto = useContext(dataContext);
    return contexto;
}