import { useState, createContext, useEffect } from "react"

export const dataContext = createContext();

export const DataProvider = ({ children }) => {

    const [farmacia, setFarmacia] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/farmacia")
            .then((res) => res.json())
            .then((farmacia) => setFarmacia(farmacia));
    }, []);

    const dadosContexto = { farmacia };

    return (
        <dataContext.Provider value={dadosContexto} >
            {children}
        </dataContext.Provider >
    )
}