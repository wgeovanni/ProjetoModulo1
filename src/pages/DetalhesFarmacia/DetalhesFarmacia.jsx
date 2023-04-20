import { useLocation, useNavigate } from 'react-router-dom'

export const DetalhesFarmacia = () => {

    const navigate = useNavigate();
    const { state } = useLocation();

    const voltar = () => {
        navigate('/listafarmacia')
    };

    return (
        <form>
            <label htmlFor="razao">Razão Social</label>
            <input type="text" name="razao" id="razao" value={state.dado.razao} readOnly />
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" id="cnpj" value={state.dado.cnpj} readOnly />
            <label htmlFor="nome">Nome Fantasia</label>
            <input type="text" name="nome" id="nome" value={state.dado.nome} readOnly />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={state.dado.email} readOnly />
            <label htmlFor="fone">Telefone</label>
            <input type="tel" name="fone" id="fone" value={state.dado.telefone} readOnly />
            <label htmlFor="cel">Celular</label>
            <input type="tel" name="cel" id="cel" value={state.dado.celular} readOnly />
            <label htmlFor="cep">CEP</label>
            <input type="text" name="cep" id="cep" value={state.dado.cep} readOnly />
            <hr />
            <label htmlFor="endereco">Logradouro/Endereço</label>
            <input type="text" name="endereco" id="endereco" value={state.dado.endereco} readOnly />
            <label htmlFor="numero">Número</label>
            <input type="number" name="numero" id="numero" value={state.dado.numero} />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" id="bairro" value={state.dado.bairro} readOnly />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" value={state.dado.cidade} readOnly />
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" id="estado" value={state.dado.estado} readOnly />
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento" value={state.dado.complemento} readOnly />

            <button type="button" onClick={voltar} >Voltar</button>
        </form>
    )
}