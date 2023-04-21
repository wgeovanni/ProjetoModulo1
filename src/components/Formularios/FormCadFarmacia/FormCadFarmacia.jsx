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
        <form className="border border-dark border-3 rounded-4 row mt-4 bg-custom" onSubmit={validaForm}>
            <legend className="text-center">Cadastro de Farmácia</legend>
            <div className="col-md-5 mb-3">
                <label htmlFor="razao" className="form-label">Razão Social</label>
                <input type="text" className="form-control border-dark" name="razao" id="razao" placeholder="Digite a razão social" required autoFocus
                    onChange={(event) => atualizaCampo("razao", event.target.value)} />
            </div>

            <div className="col-md-5">
                <label htmlFor="nome" className="form-label">Nome Fantasia</label>
                <input type="text" className="form-control border-dark" name="nome" id="nome"
                    placeholder="Digite o Nome Fantasia" required
                    onChange={(event) => atualizaCampo("nome", event.target.value)} />
            </div>

            <div className="col-md-2">
                <label htmlFor="cnpj" className="form-label">CNPJ</label>
                <input type="text" className="form-control border-dark" name="cnpj" id="cnpj"
                    placeholder="Digite o CNPJ" maxLength={16} required
                    onChange={(event) => atualizaCampo("cnpj", event.target.value)} />
            </div>

            <div className="col-md-5 mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control border-dark" name="email" id="email"
                    placeholder="Digite o Email" required
                    onChange={(event) => atualizaCampo("email", event.target.value)} />
            </div>

            <div className="col-md-2">
                <label htmlFor="fone" className="form-label">Telefone</label>
                <input type="tel" className="form-control border-dark" name="fone" id="fone"
                    placeholder="Digite o telefone" maxLength={10}
                    onChange={(event) => atualizaCampo("fone", event.target.value)} />
            </div>

            <div className="col-md-2">
                <label htmlFor="cel" className="form-label">Celular</label>
                <input type="tel" className="form-control border-dark" name="cel" id="cel"
                    placeholder="Digite o Celular" maxLength={11} required
                    onChange={(event) => atualizaCampo("cel", event.target.value)} />
            </div>

            <div className="col-md-2">
                <label htmlFor="cep" className="form-label">CEP</label>
                <input type="number" className="form-control border-dark" name="cep" id="cep"
                    placeholder="Digite o CEP" max={99999999} required
                    onChange={(event) => { confereCep(event.target.value) }} />
            </div>

            <hr className="mt-3" />

            <div className="col-md-5 mb-3">
                <label htmlFor="endereco" className="form-label">Logradouro/Endereço</label>
                <input type="text" className="form-control border-dark" name="endereco" id="endereco"
                    placeholder="Digite o endereço"
                    defaultValue={endereco?.logradouro} required
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="numero" className="form-label">Número</label>
                <input type="number" className="form-control border-dark" name="numero" id="numero" required
                    placeholder="Ex.: 123"
                    onChange={(event) => atualizaCampo("numero", event.target.value)} />
            </div>

            <div className="col-md-5">
                <label htmlFor="bairro" className="form-label">Bairro</label>
                <input type="text" className="form-control border-dark" name="bairro" id="bairro"
                    placeholder="Digite o nome do bairro"
                    defaultValue={endereco?.bairro} required
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="complemento" className="form-label">Complemento</label>
                <input type="text" className="form-control border-dark" name="complemento" id="complemento"
                    placeholder="Digite o complemento do endereço"
                    onChange={(event) => atualizaCampo("complemento", event.target.value)} />
            </div>

            <div className="col-md-5 mb-3">
                <label htmlFor="cidade" className="form-label">Cidade</label>
                <input type="text" className="form-control border-dark" name="cidade" id="cidade"
                    placeholder="Digite a cidade"
                    defaultValue={endereco?.localidade} required
                />
            </div>

            <div className="col-md-1">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" className="form-control border-dark" name="estado" id="estado"
                    placeholder="Ex.: Sp"
                    defaultValue={endereco?.uf} required
                />
            </div>
            <div className="row">
                <div className="d-grid col-2 mx-auto mb-4">
                    <input type="submit" className="btn btn-lg rounded-pill btn-custom" />
                </div>
            </div>
        </form>
    )
}