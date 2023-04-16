import { useState, createContext, useEffect } from "react"

export const dataContext = createContext();

export const DataProvider = ({ children }) => {

    const [farmacia, setFarmacia] = useState([]);

    const dadosContexto = { farmacia };

    return (
        <dataContext.Provider value={dadosContexto} >
            {children}
        </dataContext.Provider >
    )
}