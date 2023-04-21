import { useEffect, useState } from "react";
import { useData } from "../../../context/useData";

export const FormLogin = () => {

    const [usuario, setUsuario] = useState("");

    const { setVarHidden, validaForm } = useData();

    useEffect(() => {
        setVarHidden(true);
    }, [])

    const atualizaCampo = (campo, valor) => {
        const novoDado = { ...usuario, [campo]: valor };
        setUsuario(novoDado);
    }

    const salva = () => {
        event.preventDefault();
        validaForm(usuario);
    }

    return (
        <form className="formLogin" onSubmit={salva}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" onChange={(event) => atualizaCampo("email", event.target.value)} id="email" placeholder="exemplo@email.com" autoFocus required />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" onChange={(event) => atualizaCampo("senha", event.target.value)} id="senha" placeholder="Digite sua senha" minLength="8" required />
            <input className="btnSubmit" type="submit" />
        </form>
    );
};