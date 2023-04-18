import { useState } from "react"

export const FormCadMedicamentos = () => {

    //Objeto medicamento
    const [medicamento, setMedicamento] = useState({
        nomeMed: "",
        nomeLab: "",
        dosagem: "",
        descricao: "",
        preco: "",
        tipo: "",
    });

    //Captura os dados
    const atualizaCampo = (campo, valor) => {
        const novoDado = { ...medicamento, [campo]: valor };
        setMedicamento(novoDado);
    }

    //Envia para o arquivo JSON
    const salvaMedicamento = () => {
        fetch("http://localhost:8080/medicamento", {
            method: "POST",
            body: JSON.stringify(medicamento),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const cadastraMed = () => {
        event.preventDefault();
        salvaMedicamento()
        alert("Medicamento cadastrado com sucesso!");
        //Reseta formulário
        const form = document.querySelector("form");
        form.reset();
    }

    return (

        <form onSubmit={cadastraMed}>
            <label htmlFor="nomeMed">Nome do medicamento</label>
            <input type="text" name="nomeMed" id="nomeMed" required
                onChange={(event) => atualizaCampo("nomeMed", event.target.value)} />
            <label htmlFor="nomeLab">Nome do laboratório</label>
            <input type="text" name="nomeLab" id="nomeLab" required
                onChange={(event) => atualizaCampo("nomeLab", event.target.value)} />
            <label htmlFor="dosagem">Dosagem</label>
            <input type="text" name="dosagem" id="dosagem" required
                onChange={(event) => atualizaCampo("dosagem", event.target.value)} />
            <label htmlFor="descricao">Descrição</label>
            <input type="textarea" name="descricao" id="descricao"
                onChange={(event) => atualizaCampo("descricao", event.target.value)} />
            <label htmlFor="preco">Valor Unitário</label>
            <input type="text" name="preco" id="preco" required
                onChange={(event) => atualizaCampo("preco", event.target.value)} />
            <label htmlFor="tipo">Tipo de Medicamento</label>
            <select name="tipo" id="tipo" required onChange={(evento) => atualizaCampo("tipo", evento.target.value)}>
                <option>Selecione...</option>
                <option value="Medicamento Controlado">Medicamento Controlado</option>
                <option value="Medicamento Comum">Medicamento Comum</option>
            </select>
            <input type="submit" />
        </form>
    )
}