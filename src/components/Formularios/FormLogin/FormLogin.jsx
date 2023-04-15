import { useState } from "react";

export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    let usuario = {
        email: "",
        senha: "",
    }

    const validaForm = () => {
        event.preventDefault();
        usuario.email = email;
        usuario.senha = senha;

        if (usuario.senha.length >= 8) {
            if (/^[A-Za-z0-9]*$/.test(usuario.senha)) {
                localStorage.setItem("Usuário", JSON.stringify(usuario))
            }
        }
    }

    return (
        <form onSubmit={validaForm}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} id="email" placeholder="exemplo@email.com" autoFocus required />
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={(event) => setSenha(event.target.value)} id="senha" placeholder="Digite sua senha" minlenght="8" required />
                <input type="submit" />
            </fieldset>
        </form>
    );
}