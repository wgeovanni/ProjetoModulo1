import { useState, createContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const dataContext = createContext();

export const DataProvider = ({ children }) => {

    //Variáveis do contexto
    const navigate = useNavigate();
    const [loginUsuario, setLoginUsuario] = useState("");
    const [farmacia, setFarmacia] = useState([]);
    const [medicamento, setMedicamento] = useState([]);
    const [varHidden, setVarHidden] = useState(true);

    //Atualiza a cada mudança do estado loginUsuario
    useEffect(() => { }, [loginUsuario]);

    //Atualiza e busca os valores do arquivo json
    useEffect(() => {
        buscaFarm("farmacia");
        buscaMed("medicamento");
    }, []);

    const atualizaCampo = (campo, valor) => {
        const novoDado = { ...loginUsuario, [campo]: valor };
        setLoginUsuario(novoDado);
    }

    //Efetua login do usuário
    const validaForm = () => {


        let letrasTest = /^[a-zA-Z]+$/;
        let numTest = /^[0-9]+$/;
        console.log(letrasTest.test(loginUsuario.senha))

        //Verifica se possui letras
        if (letrasTest.test(loginUsuario.senha)) {

            //Verifica se possui números
            if (numTest.test(loginUsuario.senha)) {

                localStorage.setItem("Usuário", JSON.stringify(loginUsuario));
                setVarHidden(false);
                navigate('/listafarmacia');

            } else {
                return alert("A senha deve conter ao menos 1 número");
            }

        } else {
            return (alert("A senha deve conter ao menos uma letra"));
        }
    }

    const buscaFarm = () => {
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

    //Salva faramcia ou medicamento dependendo dos argumentos recebidos
    const salva = (listabd, objeto) => {
        fetch(`http://localhost:8080/${listabd}`, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    //Faz requisição na API do IBGE
    const pesquisa = (cep) => {

        let retDados = null;

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((dados) => console.log(dados))
            .catch((error) => console.log(error));
        return retDados;
    }

    return (
        <dataContext.Provider value={{
            farmacia,
            medicamento,
            varHidden,
            salva,
            pesquisa,
            setVarHidden,
            validaForm,
            atualizaCampo
        }}>
            {children}
        </dataContext.Provider >
    );
};