import { useState, createContext, useEffect } from "react"

export const dataContext = createContext();

export const DataProvider = ({ children }) => {

    const [farmacia, setFarmacia] = useState([]);
    const [medicamento, setMedicamento] = useState([]);

    const buscaFarmacia = () => {
        fetch("http://localhost:8080/farmacia")
            .then((res) => res.json())
            .then((dados) => setFarmacia(dados));
    }

    const buscaMedicamento = () => {
        fetch("http://localhost:8080/medicamento")
            .then((res) => res.json())
            .then((dados) => setMedicamento(dados));
    }

    return (
        <dataContext.Provider value={{
            farmacia,
            medicamento,
            buscaFarmacia,
            buscaMedicamento
        }}>
            {children}
        </dataContext.Provider >
    );
};