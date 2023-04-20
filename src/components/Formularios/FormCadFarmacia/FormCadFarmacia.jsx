import { useState, useEffect } from "react";
import { useData } from "../../../context/useData";

export const FormCadFarmacia = () => {

    const { salva, pesquisa } = useData();

    //Variável para recebimento dos dados da API
    const [endereco, setEndereco] = useState({});

    //Variável para cadastro da farmácia
    const [farmacia, setFarmacia] = useState({})

    useEffect(() => {
    }, [endereco, farmacia]);

    const atualizaCampo = (campo, valor) => {
        const novoDado = { ...farmacia, [campo]: valor }

        setFarmacia(novoDado);
    }

    //Insere dados da API ViaCep
    const insereDados = (dados) => {
        setEndereco(dados);
    }

    //Valida Cep e faz requisição
    // const confereCep = (formCep) => {

    //     if (formCep != "" && formCep.length == 8) {
    //         const dados = pesquisa(formCep);
    //         console.log(dados)
    //         setEndereco(dados);
    //         insereDados(dados);
    //     } else {
    //         setEndereco("");
    //         // setFarmacia("");
    //     }
    // }

    const confereCep = (formCep) => {
        if (formCep != "" && formCep.length == 8) {

            fetch(`https://viacep.com.br/ws/${formCep}/json/`)
                .then((response) => response.json())
                .then((dados) => {
                    setEndereco(dados);
                    atualizaCampo("estado", dados.uf);
                    atualizaCampo("endereco", dados.logradouro);
                    atualizaCampo("cidade", dados.localidade);
                    atualizaCampo("bairro", dados.bairro);
                })
                .catch((error) => console.log(error));

            atualizaCampo("cep", formCep);

        }
    }

    const validaForm = (e) => {
        e.preventDefault();
        salva("farmacia", farmacia);
        alert("Farmácia Salva com sucesso");
        //setFarmacia("");
        //setEndereco("");
        // farmacia = farmacia.map((farmacia) => {

        // })
    }

    return (
        <form onSubmit={validaForm}>
            <label htmlFor="razao">Razão Social</label>
            <input type="text" name="razao" id="razao" placeholder="Digite a razão social" required autoFocus
                onChange={(event) => atualizaCampo("razao", event.target.value)} />
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" id="cnpj" placeholder="Digite o CNPJ" maxLength={16} required
                onChange={(event) => atualizaCampo("cnpj", event.target.value)} />
            <label htmlFor="nome">Nome Fantasia</label>
            <input type="text" name="nome" id="nome" placeholder="Digite o Nome Fantasia" required
                onChange={(event) => atualizaCampo("nome", event.target.value)} />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite o Email" required
                onChange={(event) => atualizaCampo("email", event.target.value)} />
            <label htmlFor="fone">Telefone</label>
            <input type="tel" name="fone" id="fone" placeholder="Digite o telefone" maxLength={10}
                onChange={(event) => atualizaCampo("fone", event.target.value)} />
            <label htmlFor="cel">Celular</label>
            <input type="tel" name="cel" id="cel" placeholder="Digite o Celular" maxLength={11} required
                onChange={(event) => atualizaCampo("cel", event.target.value)} />
            <label htmlFor="cep">CEP</label>
            <input type="number" name="cep" id="cep" placeholder="Digite o CEP" max={99999999} required
                onChange={(event) => { confereCep(event.target.value) }} />
            <hr />
            <label htmlFor="endereco">Logradouro/Endereço</label>
            <input type="text" name="endereco" id="endereco" value={endereco?.logradouro} required
            />
            <label htmlFor="numero">Número</label>
            <input type="number" name="numero" id="numero" required
                onChange={(event) => atualizaCampo("numero", event.target.value)} />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" id="bairro" value={endereco?.bairro} required
            />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" value={endereco?.localidade} required
            />
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" id="estado" value={endereco?.uf} required
            />
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento"
                onChange={(event) => atualizaCampo("complemento", event.target.value)} />
            <input type="submit" />
        </form>
    )
}