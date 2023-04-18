import { useContext } from "react";
import { dataContext } from "./DataContext";

export const useData = () => {

    const context = useContext(dataContext);
    return context;
}