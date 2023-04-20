import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/useData";
import "./formLogin.css";


export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { alteraVarHidden } = useData();
    const navigate = useNavigate();

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
                localStorage.setItem("Usuário", JSON.stringify(usuario));
                alteraVarHidden();
                navigate('/listafarmacia');
            }
        }
    }

    return (
        <form className="formLogin" onSubmit={validaForm}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} id="email" placeholder="exemplo@email.com" autoFocus required />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" onChange={(event) => setSenha(event.target.value)} id="senha" placeholder="Digite sua senha" minlenght="8" required />
            <input className="btnSubmit" type="submit" />
        </form>
    );
};