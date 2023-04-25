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
        //Container do formulário
        <div className="d-flex align-items-center justify-content-center m-2">

            <form className="form border border-info border-2 rounded-4 
        row justify-content-md-center mt-3 bg-custom" onSubmit={salva} >

                <img src="../../../src/assets/logo-sistema.png" className="img-custom"
                    alt="Pharmacy Central System" />


                <div className="input-group col-md-8 mb-3">
                    <span className="input-group-text">teste</span>
                    <div className="form-floating">
                        <input type="email" className="form-control border-dark" name="email"
                            id="email" placeholder="exemplo@email.com" autoFocus required
                            onChange={(event) => handleChangeLogin("email", event.target.value)} />
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div>


                <div className="input-group col-md-8 mb-3">
                    <span className="input-group-text">teste</span>
                    <div className="form-floating">
                        <input type="password" className="form-control border-dark" name="senha"
                            id="senha" placeholder="Digite sua senha" minLength="8" required
                            onChange={(event) => handleChangeLogin("senha", event.target.value)} />
                        <label htmlFor="senha">Senha</label>
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