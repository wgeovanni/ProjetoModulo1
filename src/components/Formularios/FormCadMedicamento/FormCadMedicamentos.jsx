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
        <div className="container">
            <form className="border rounded border-3 border-dark row needs-validation" novalidate onSubmit={valida} >
                <div className="col-md-6">
                    <label htmlFor="nomeMed" className="form-label">Nome do medicamento</label>
                    <input type="text" className="form-control border border-3" name="nomeMed" id="nomeMed" required
                        onChange={(event) => atualizaCampo("nomeMed", event.target.value)} />
                    <div className="invalid-feedback">
                        Preencha com o nome do medicamento.
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="nomeLab" className="form-label">Nome do laboratório</label>
                    <input type="text" className="form-control border border-3" name="nomeLab" id="nomeLab" required
                        onChange={(event) => atualizaCampo("nomeLab", event.target.value)} />
                    <div className="invalid-feedback">
                        Preencha com o nome do laboratório
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="dosagem" className="form-label">Dosagem</label>
                    <input type="text" className="form-control border border-3" name="dosagem" id="dosagem" required
                        onChange={(event) => atualizaCampo("dosagem", event.target.value)} />
                    <div className="invalid-feedback">
                        Preencha com a dosagem do medicamento.
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="preco" className="form-label">Valor Unitário</label>
                    <input type="text" className="form-control border border-3" name="preco" id="preco" required
                        onChange={(event) => atualizaCampo("preco", event.target.value)} />
                    <div className="invalid-feedback">
                        Preencha com o valor do medicamento.
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="tipo" className="form-label">Tipo de Medicamento</label>
                    <select name="tipo" className="form-select border border-3" id="tipo" required
                        onChange={(evento) => atualizaCampo("tipo", evento.target.value)}>
                        <option>Selecione...</option>
                        <option value="Medicamento Controlado">Medicamento Controlado</option>
                        <option value="Medicamento Comum">Medicamento Comum</option>
                    </select>
                    <div className="invalid-feedback">
                        Selecione o tipo do medicamento.
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <input type="textarea" className="form-control border border-3" name="descricao" id="descricao"
                        onChange={(event) => atualizaCampo("descricao", event.target.value)} />
                    <div className="invalid-feedback">
                        Preencha com a descrição do medicamento.
                    </div>
                </div>

                <button className="btn btn-lg btn-outline-primary mt-3" type="submit">Salvar</button>
            </form >
        </div>
    )
}