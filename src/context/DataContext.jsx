import { useState, createContext, useEffect } from "react"

export const dataContext = createContext();

export const DataProvider = ({ children }) => {

    //Variáveis do contexto
    const [farmacia, setFarmacia] = useState([]);
    const [medicamento, setMedicamento] = useState([]);

    //Atualiza e busca os valores do arquivo json
    useEffect(() => {
        buscaFarm("farmacia");
        buscaMed("medicamento");
    }, [])


    const buscaFarm = () => {

        console.log("teste")
        fetch("http://localhost:8080/farmacia")
            .then((response) => response.json())
            .then((dados) => setFarmacia(dados))
            .catch((error) => console.log(error));
    }

    const buscaMed = () => {

        fetch("http://localhost:8080/medicamento")
            .then((response) => response.json())
            .then((dados) => setMedicamento(dados))
            .catch((error) => console.log(error));
    }

    const salva = (listabd, objeto) => {
        fetch(`http://localhost:8080/${listabd}`, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const pesquisa = (cep) => {

        let retDados = null;

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((dados) => retDados = dados)
            .catch((error) => console.log(error));

        return retDados;
    }

    return (
        <dataContext.Provider value={{
            farmacia,
            medicamento,
            salva,
            pesquisa
        }}>
            {children}
        </dataContext.Provider >
    );
};