import { useLocation, useNavigate } from 'react-router-dom'
import "./detalhesFarmacia.css"

export const DetalhesFarmacia = () => {

    const navigate = useNavigate();
    const { state } = useLocation();

    //Retorna para a página anterior
    const voltar = () => {
        navigate('/listafarmacia')
    };

    return (
        <form className="border border-dark border-3 rounded-4 row mt-4 bg-custom" >
            <legend className="text-center">Detalhes da Farmácia</legend>

            <div className="col-md-5 mb-3">
                <label htmlFor="razao" className="form-label">Razão Social</label>
                <input type="text" className="form-control border-dark" name="razao" id="razao"
                    value={state.dado.razao} readOnly />
            </div>

            <div className="col-md-5">
                <label htmlFor="nome" className="form-label">Nome Fantasia</label>
                <input type="text" className="form-control border-dark" name="nome" id="nome"
                    value={state.dado.nome} readOnly />
            </div>

            <div className="col-md-2">
                <label htmlFor="cnpj" className="form-label">CNPJ</label>
                <input type="text" className="form-control border-dark" name="cnpj" id="cnpj"
                    value={state.dado.cnpj} readOnly />
            </div>

            <div className="col-md-5 mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control border-dark" name="email" id="email"
                    value={state.dado.email} readOnly />
            </div>

            <div className="col-md-2">
                <label htmlFor="fone" className="form-label">Telefone</label>
                <input type="tel" className="form-control border-dark" name="fone" id="fone"
                    value={state.dado.telefone} readOnly />
            </div>

            <div className="col-md-2">
                <label htmlFor="cel" className="form-label">Celular</label>
                <input type="tel" className="form-control border-dark" name="cel" id="cel"
                    value={state.dado.celular} readOnly />
            </div>

            <div className="col-md-2">
                <label htmlFor="cep" className="form-label">CEP</label>
                <input type="text" className="form-control border-dark" name="cep" id="cep"
                    value={state.dado.cep} readOnly />
            </div>
            <hr className="mt-3" />

            <div className="col-md-5 mb-3">
                <label htmlFor="endereco" className="form-label">Logradouro/Endereço</label>
                <input type="text" className="form-control border-dark" name="endereco" id="endereco"
                    value={state.dado.endereco} readOnly />
            </div>

            <div className="col-md-2">
                <label htmlFor="numero" className="form-label">Número</label>
                <input type="number" className="form-control border-dark" name="numero" id="numero"
                    value={state.dado.numero} readOnly />
            </div>

            <div className="col-md-5">
                <label htmlFor="bairro" className="form-label">Bairro</label>
                <input type="text" className="form-control border-dark" name="bairro" id="bairro"
                    value={state.dado.bairro} readOnly />
            </div>

            <div className="col-md-6">
                <label htmlFor="complemento" className="form-label">Complemento</label>
                <input type="text" className="form-control border-dark" name="complemento" id="complemento"
                    value={state.dado.complemento} readOnly />
            </div>

            <div className="col-md-5 mb-3">
                <label htmlFor="cidade" className="form-label">Cidade</label>
                <input type="text" className="form-control border-dark" name="cidade" id="cidade"
                    value={state.dado.cidade} readOnly />
            </div>

            <div className="col-md-1">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" className="form-control border-dark" name="estado" id="estado"
                    value={state.dado.estado} readOnly />
            </div>

            <div className="row">
                <div className="d-grid col-2 mx-auto mb-4">
                    <button type="button" className="btn btn-lg rounded-pill btn-custom"
                        onClick={voltar} >Voltar</button>
                </div>
            </div>
        </form >
    )
}