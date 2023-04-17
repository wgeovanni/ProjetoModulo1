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

    //Valida Cep e faz requisição
    const pesquisaCep = (formCep) => {
        setCep(formCep);

        if (formCep != "") {
            let cepValido = /^[0-9]{8}$/;

            if (cepValido.test(formCep)) {
                console.log(cepValido.test(formCep))
                fetch(`https://viacep.com.br/ws/${formCep}/json/`)
                    .then((response) => response.json())
                    .then((dados) => console.log(dados))
            }
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
    }

    return (
        <form onSubmit={validaForm}>
            <label htmlFor="razao">Razão Social</label>
            <input type="text" name="razao" placeholder="Digite a razão social" required autoFocus
                value={razao} onChange={(event) => setRazao(event.target.value)} />
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" placeholder="Digite o CNPJ" maxLength={16} value={cnpj} required
                onChange={(event) => setCnpj(event.target.value)} />
            <label htmlFor="nome">Nome Fantasia</label>
            <input type="text" name="nome" placeholder="Digite o Nome Fantasia" value={nome} required
                onChange={(event) => setNome(event.target.value)} />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite o Email" value={email} required
                onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="fone">Telefone</label>
            <input type="tel" name="fone" placeholder="Digite o telefone" maxLength={10} value={fone}
                onChange={(event) => setFone(event.target.value)} />
            <label htmlFor="cel">Celular</label>
            <input type="tel" name="cel" placeholder="Digite o Celular" maxLength={11} value={cel} required
                onChange={(event) => setCel(event.target.value)} />
            <label htmlFor="cep">CEP</label>
            <input type="number" name="cep" placeholder="Digite o CEP" max={99999999} value={cep} required
                onChange={(event) => { pesquisaCep(event.target.value) }} />
            <hr />
            <label htmlFor="endereco">Logradouro/Endereço</label>
            <input type="text" name="endereco" value={endereco} required
                onChange={(event) => setEndereco(event.target.value)} />
            <label htmlFor="numero">Número</label>
            <input type="number" name="numero" required
                onChange={(event) => setNumero(event.target.value)} value={numero} />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" value={bairro} required
                onChange={(event) => setBairro(event.target.value)} />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" value={cidade} required
                onChange={(event) => setCidade(event.target.value)} />
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" value={estado} required
                onChange={(event) => setEstado(event.target.value)} />
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento"
                onChange={(event) => setComplemento(event.target.value)} value={complemento} />
            <input type="submit" />
        </form>
    )
}