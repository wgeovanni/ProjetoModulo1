import { useState, useEffect } from "react"

export const FormCadFarmacia = () => {

    //Variáveis para captura dos dados
    const [razao, setRazao] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    const [cel, setCel] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [complemento, setComplemento] = useState("");

    //Variável para cadastro da farmácia
    const farmacia = {
        razao: razao,
        cnpj: cnpj,
        nome: nome,
        email: email,
        fone: fone,
        cel: cel,
        cep: cep,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        complemento: complemento
    }

    //Insere dados da API ViaCep
    const insereDados = (dados) => {
        setEndereco(dados.logradouro);
        setBairro(dados.bairro);
        setCidade(dados.localidade);
        setEstado(dados.uf);
    }

    //Valida Cep e faz requisição
    const pesquisaCep = (formCep) => {
        setCep(formCep);

        if (formCep != "" && formCep.length == 8) {
            fetch(`https://viacep.com.br/ws/${formCep}/json/`)
                .then((response) => response.json())
                .then((dados) => insereDados(dados))
        } else {
            setEndereco("");
            setBairro("");
            setCidade("");
            setEstado("");
        }
    }

    const salvaFarmacia = () => {
        fetch("http://localhost:8080/farmacia", {
            method: "POST",
            body: JSON.stringify(farmacia),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const validaForm = () => {
        event.preventDefault();
        salvaFarmacia();
        alert("Farmácia Salva com sucesso");
        let form = document.querySelector("form");
        form.reset();
        setEndereco("");
        setBairro("");
        setCidade("");
        setEstado("");
    }

    return (
        <form onSubmit={validaForm}>
            <label htmlFor="razao">Razão Social</label>
            <input type="text" name="razao" id="razao" placeholder="Digite a razão social" required autoFocus
                onChange={(event) => setRazao(event.target.value)} />
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" id="cnpj" placeholder="Digite o CNPJ" maxLength={16} required
                onChange={(event) => setCnpj(event.target.value)} />
            <label htmlFor="nome">Nome Fantasia</label>
            <input type="text" name="nome" id="nome" placeholder="Digite o Nome Fantasia" required
                onChange={(event) => setNome(event.target.value)} />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite o Email" required
                onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="fone">Telefone</label>
            <input type="tel" name="fone" id="fone" placeholder="Digite o telefone" maxLength={10}
                onChange={(event) => setFone(event.target.value)} />
            <label htmlFor="cel">Celular</label>
            <input type="tel" name="cel" id="cel" placeholder="Digite o Celular" maxLength={11} required
                onChange={(event) => setCel(event.target.value)} />
            <label htmlFor="cep">CEP</label>
            <input type="number" name="cep" id="cep" placeholder="Digite o CEP" max={99999999} required
                onChange={(event) => { pesquisaCep(event.target.value) }} />
            <hr />
            <label htmlFor="endereco">Logradouro/Endereço</label>
            <input type="text" name="endereco" id="endereco" value={endereco} required
            />
            <label htmlFor="numero">Número</label>
            <input type="number" name="numero" id="numero" required
                onChange={(event) => setNumero(event.target.value)} />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" id="bairro" value={bairro} required
            />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" value={cidade} required
            />
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" ic="estado" value={estado} required
            />
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento"
                onChange={(event) => setComplemento(event.target.value)} />
            <input type="submit" />
        </form>
    )
}