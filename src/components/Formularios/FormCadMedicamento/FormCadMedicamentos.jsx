import { useState } from "react"
import { useData } from "../../../context/useData";

export const FormCadMedicamentos = () => {

    const { salva } = useData();
    //Objeto medicamento
    const [medicamento, setMedicamento] = useState("");

    //Captura os dados
    const atualizaCampo = (campo, valor) => {
        const novoDado = { ...medicamento, [campo]: valor };
        setMedicamento(novoDado);
    }

    const cadastraMed = () => {
        event.preventDefault();

        //Envia para o arquivo JSON
        salva("medicamento", medicamento);
        alert("Medicamento cadastrado com sucesso!");

        //Reseta formulário
        const form = document.querySelector("form");
        form.reset();
    }

    const valida = () => {


        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })

        cadastraMed();
    }

    return (

        <form className="border border-dark border-3 rounded-4 row mt-3 justify-content-md-center bg-custom" novalidate onSubmit={valida} >
            <legend className="text-center mt-3 mb-3">Cadastro de medicamento</legend>
            <div className="col-md-6 mb-3">
                <label htmlFor="nomeMed" className="form-label">Nome do medicamento</label>
                <input type="text" className="form-control border-dark" name="nomeMed" id="nomeMed"
                    placeholder="Digite o nome do medicamento" required
                    onChange={(event) => atualizaCampo("nomeMed", event.target.value)} />
            </div>

            <div className="col-md-6">
                <label htmlFor="nomeLab" className="form-label">Nome do laboratório</label>
                <input type="text" className="form-control border-dark" name="nomeLab" id="nomeLab" required
                    placeholder="Digite o nome do laboratório"
                    onChange={(event) => atualizaCampo("nomeLab", event.target.value)} />
            </div>

            <div className="col-md-4 mb-3">
                <label htmlFor="dosagem" className="form-label">Dosagem</label>
                <input type="text" className="form-control border-dark" name="dosagem" id="dosagem" required
                    placeholder="Digite a dosagem"
                    onChange={(event) => atualizaCampo("dosagem", event.target.value)} />

            </div>

            <div className="col-md-3">
                <label htmlFor="preco" className="form-label">Valor Unitário</label>
                <div className="input-group border border-dark">
                    <span className="input-group-text">R$</span>
                    <input type="number" step="0.01" className="form-control" name="preco" id="preco" required
                        placeholder="Ex.: 10,99"
                        onChange={(event) => atualizaCampo("preco", event.target.value)} />
                </div>

            </div>

            <div className="col-md-4">
                <label htmlFor="tipo" className="form-label">Tipo de Medicamento</label>
                <select name="tipo" className="form-select border-dark" id="tipo" required
                    onChange={(evento) => atualizaCampo("tipo", evento.target.value)}>
                    <option>Selecione o tipo do medicamento</option>
                    <option value="Medicamento Controlado">Medicamento Controlado</option>
                    <option value="Medicamento Comum">Medicamento Comum</option>
                </select>
            </div>

            <div className="col-md-6 mb-2 text-center">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea className="textarea-custom form-control border-dark" name="descricao" id="descricao"
                    onChange={(event) => atualizaCampo("descricao", event.target.value)} />
            </div>

            <div className="row">
                <div className="d-grid col-2 mx-auto mb-3">
                    <button className="btn btn-lg rounded-pill btn-custom" type="submit">Salvar</button>
                </div>
            </div>
        </form >
    )
}