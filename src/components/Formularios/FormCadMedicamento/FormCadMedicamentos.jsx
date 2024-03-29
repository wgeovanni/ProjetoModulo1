import { useState } from "react"
import { useData } from "../../../context/useData";

export const FormCadMedicamentos = () => {

    //Função do contexto chamada através do customHook
    const { salva } = useData();

    //Objeto medicamento
    const [medicamento, setMedicamento] = useState({
        descricao: ""
    });

    //Captura os dados
    const handleChange = (campo, valor) => {
        const novoDado = { ...medicamento, [campo]: valor };
        setMedicamento(novoDado);
    }

    //Salva o medicamento
    const cadastraMed = () => {
        event.preventDefault();

        //Envia para o arquivo JSON
        salva("medicamento", medicamento);
        alert("Medicamento cadastrado com sucesso!");

        //Reseta formulário
        const form = document.querySelector("form");
        form.reset();
    }

    return (

        <form className="border border-info-subtle border-3 rounded-4 
        row justify-content-md-center mt-3 bg-custom" onSubmit={cadastraMed} >

            <legend className="text-center">Cadastro de Medicamento</legend>
            <div className="col-md-6 mb-3">
                <label htmlFor="nomeMed" className="form-label">Nome do medicamento</label>
                <input type="text" className="form-control border-dark" name="nomeMed" id="nomeMed"
                    placeholder="Digite o nome do medicamento" required
                    onChange={(event) => handleChange("nomeMed", event.target.value)} />
            </div>

            <div className="col-md-6">
                <label htmlFor="nomeLab" className="form-label">Nome do laboratório</label>
                <input type="text" className="form-control border-dark" name="nomeLab" id="nomeLab" required
                    placeholder="Digite o nome do laboratório"
                    onChange={(event) => handleChange("nomeLab", event.target.value)} />
            </div>

            <div className="col-md-3 mb-3">
                <label htmlFor="dosagem" className="form-label">Dosagem</label>
                <input type="text" className="form-control border-dark" name="dosagem" id="dosagem" required
                    placeholder="Digite a dosagem"
                    onChange={(event) => handleChange("dosagem", event.target.value)} />
            </div>

            <div className="col-md-3 mb-3">
                <label htmlFor="preco" className="form-label">Valor Unitário</label>
                <div className="input-group border border-dark">
                    <span className="input-group-text">R$</span>
                    <input type="number" step="0.01" className="form-control" name="preco" id="preco" required
                        placeholder="Ex.: 10,99" min={0}
                        onChange={(event) => handleChange("preco", event.target.value)} />
                </div>
            </div>

            <div className="col-md-6 mb-3">
                <label htmlFor="tipo" className="form-label">Tipo de Medicamento</label>
                <select name="tipo" className="form-select border-dark" id="tipo" required
                    onChange={(evento) => handleChange("tipo", evento.target.value)}>

                    <option>Selecione o tipo do medicamento</option>
                    <option value="Medicamento Controlado">Medicamento Controlado</option>
                    <option value="Medicamento Comum">Medicamento Comum</option>

                </select>
            </div>

            <div className="col-md-6 mb-2 text-center">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea className="textarea-custom form-control border-dark" name="descricao" id="descricao"
                    onChange={(event) => handleChange("descricao", event.target.value)} />
            </div>


            <div className="d-flex justify-content-center">
                <div className="mb-4">
                    <button className="btn btn-lg rounded-pill btn-custom" type="submit">Salvar</button>
                </div>
            </div>

        </form >
    )
}