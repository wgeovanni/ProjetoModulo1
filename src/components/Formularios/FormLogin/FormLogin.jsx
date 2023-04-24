import { useEffect, useState } from "react";
import { useData } from "../../../context/useData";

export const FormLogin = () => {

    const { setVarHidden, validaForm, atualizaCampo } = useData();

    useEffect(() => {
        setVarHidden(true);
    }, [])

    const salva = () => {
        event.preventDefault();
        validaForm();
    }

    return (
        <div className="d-flex align-items-center justify-content-center m-2">

            <form className="form border border-dark border-3 rounded-4 
        row justify-content-md-center mt-3 bg-custom" onSubmit={salva} >

                <legend className="text-center row justify-content-md-center">Login</legend>

                <div className="row justify-content-md-center">
                    <div className="col-md-8 mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control border-dark" name="email"
                            id="email" placeholder="exemplo@email.com" autoFocus required
                            onChange={(event) => atualizaCampo("email", event.target.value)} />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-8 mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input type="password" className="form-control border-dark" name="senha"
                            id="senha" placeholder="Digite sua senha" minLength="8" required
                            onChange={(event) => atualizaCampo("senha", event.target.value)} />
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="d-grid col-md-6 mx-auto mb-3">
                        <input className="btn btn-lg rounded-pill btn-custom" type="submit" value="Acessar" />
                    </div>
                </div>

            </form>
        </div>
    );
};