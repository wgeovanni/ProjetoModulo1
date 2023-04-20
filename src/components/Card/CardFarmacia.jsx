import { useNavigate } from "react-router-dom"

export const Farmacia = ({ farmacia }) => {

    const navigate = useNavigate();

    console.log(farmacia);

    const detalha = () => {
        navigate('/detalhes', { state: { dado: farmacia } });
    }
    return (
        <tr>
            <td>{farmacia.nome}</td>
            <td>{farmacia.cnpj}</td>
            <td>{farmacia.celular}</td>
            <td>
                <button type="button" onClick={detalha} >Detalhes</button>
            </td>
        </tr >
    )
}