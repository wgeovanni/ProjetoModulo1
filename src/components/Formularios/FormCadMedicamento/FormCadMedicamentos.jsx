import { useState } from "react"

export const FormCadMedicamentos = () => {

    const [nomeMed, setNomeMed] = useState("");
    const [nomeLab, setNomeLab] = useState("");
    const [dosagem, setDosagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [tipo, setTipo] = useState("");

    return (


        <form>
            <label htmlFor="nomeMed">Nome do medicamento</label>
            <input type="text" name="nomeMed" id="nomeMed" required
                onChange={(event) => setNomeMed(event.target.value)} />
            <label htmlFor="nomeLab">Nome do laboratório</label>
            <input type="text" name="nomeMed" id="nomeMed" required
                onChange={(event) => setNomeLab(event.target.value)} />
            <label htmlFor="dosagem">Dosagem</label>
            <input type="text" name="dosagem" id="dosagem" required
                onChange={(event) => setDosagem(event.target.value)} />
            <label htmlFor="descricao">Descrição</label>
            <input type="textarea" name="descricao" id="descricao"
                onChange={(event) => setDescricao(event.target.value)} />
            <label htmlFor="preco">Valor Unitário</label>
            <input type="text" name="preco" id="preco" required
                onChange={(event) => setPreco(event.target.value)} />
            <label htmlFor="tipo">Tipo de Medicamento</label>
            <select name="tipo" id="tipo" required onChange={(evento) => setTipo(evento.target.value)}>
                <option value="medControlado">Medicamento Controlado</option>
                <option value="medComum">Medicamento Comum</option>
            </select>
            <input type="submit" />
        </form>
    )
}