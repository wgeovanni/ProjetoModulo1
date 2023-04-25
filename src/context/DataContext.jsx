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
    const [filtro, setFiltro] = useState("");
    const [medFiltrado, setMedFiltrado] = useState();

    //Atualiza e busca os valores do arquivo json
    useEffect(() => {
        buscaFarm();
        buscaMed();
        filtrado();
        setVarHidden(false)
    }, []);

    //Salva novos dados do usuário logado
    const handleChangeLogin = (campo, valor) => {
        const novoDado = { ...loginUsuario, [campo]: valor };
        setLoginUsuario(novoDado);
    }

    const filtrar = (valor) => {
        setFiltro(valor);
    }

    const filtrado = () => {
        let listFiltrado = [];
        listFiltrado = medicamento.filter((remedio) => {
            if (filtro.length == 0) {
                console.log("teste")
                return medicamento;
            } else {
                if (remedio.nomeMed == valor) {
                    console.log(remedio.nomeMed)
                    return remedio;
                }
            }
        });

        setMedFiltrado(listFiltrado);

    }

    //Efetua login do usuário
    const validaForm = () => {

        let letrasTest = /.*?[A-Za-z]/;
        let numTest = /.*?[0-9]/;

        //Verifica se possui letras
        if (letrasTest.test(loginUsuario.senha)) {

            //Verifica se possui números
            if (numTest.test(loginUsuario.senha)) {

                salva("usuario", loginUsuario)
                setVarHidden(false);
                navigate('/listafarmacia');

            } else {
                return alert("A senha deve conter ao menos 1 número");
            }

        } else {
            return alert("A senha deve conter ao menos uma letra");
        }
    }

    //Salva dados de farmácias json em um state
    const buscaFarm = () => {
        fetch("http://localhost:8080/farmacia")
            .then((response) => response.json())
            .then((dados) => setFarmacia(dados))
            .catch((error) => console.log(error));
    }

    //Salva dados de medicamentos do json em um state
    const buscaMed = () => {
        fetch("http://localhost:8080/medicamento")
            .then((response) => response.json())
            .then((dados) => setMedicamento(dados))
            .catch((error) => console.log(error));
    }

    //Salva farmacia ou medicamento dependendo dos argumentos recebidos
    const salva = (listabd, objeto) => {

        fetch(`http://localhost:8080/${listabd}`, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((error) => console.log(error));
        buscaFarm();
        buscaMed();
    }

    return (
        <dataContext.Provider value={{
            farmacia,
            medicamento,
            varHidden,
            medFiltrado,
            salva,
            setVarHidden,
            validaForm,
            handleChangeLogin,
            setFiltro,
            filtrar,
            filtrado
        }}>
            {children}
        </dataContext.Provider >
    );
};