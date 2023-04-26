import { useEffect } from "react";
import { useData } from "../../../context/useData";

export const FormLogin = () => {

    const { setVarHidden, validaForm, handleChangeLogin } = useData();

    useEffect(() => {
        setVarHidden(true);
    }, [])

    //Salva no arquivo json
    const salva = () => {
        event.preventDefault();
        validaForm();
    }

    return (

        <form className="form col-md-8 col-sm-12 mx-auto border border-dark border-3 rounded-4 width-50
        bg-custom" onSubmit={salva} >

            <img src="../../../src/assets/logo-sistema.png" className="img-custom w-75" alt="Pharmacy Central System" />

            <div className="col-md-10 mb-1 p-2 mx-auto">
                <div className="input-group mx-auto">
                    <i className="input-group-text bi-person"></i>
                    <div className="form-floating">
                        <input type="email" className="form-control border-dark" name="email"
                            id="email" placeholder="exemplo@email.com" autoFocus required
                            onChange={(event) => handleChangeLogin("email", event.target.value)} />
                        <label htmlFor="email" className="form-label">E-mail</label>
                    </div>
                </div>
            </div>

            <div className="col-md-10 mb-1 p-2 mx-auto">
                <div className="input-group">
                    <i className="input-group-text bi-lock-fill"></i>
                    <div className="form-floating">
                        <input type="password" className="form-control border-dark" name="senha"
                            id="senha" placeholder="Digite sua senha" minLength="8" required
                            onChange={(event) => handleChangeLogin("senha", event.target.value)} />
                        <label htmlFor="senha" className="form-label">Senha</label>
                    </div>
                </div>
            </div>

            <div className="d-grid col-md-6 mx-auto mb-3">
                <input className="btn btn-lg rounded-pill btn-custom" type="submit" value="Acessar" />
            </div>

        </form>
    );
};