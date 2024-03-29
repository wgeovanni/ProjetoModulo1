import { useNavigate } from "react-router-dom"

export const Farmacia = ({ farmacia }) => {

    const navigate = useNavigate();

    //Envia objeto farmácia para a página detalhes
    const detalha = () => {
        navigate('/detalhes', { state: { dado: farmacia } });
    }

    return (

        //Linha da tabela com as informações gerais da farmácia selecionada
        <tr className="align-middle">
            <td>{farmacia.nome}</td>
            <td>{farmacia.cnpj}</td>
            <td>{farmacia.celular}</td>
            <td>
                <button className="btn bg-info rounded-pill btn-detail-custom"
                    type="button" onClick={detalha} >Detalhes</button>
            </td>
        </tr >
    )
}