import { useNavigate } from "react-router-dom"
import "./farmacia.css"

export const Farmacia = ({ farmacia }) => {

    const navigate = useNavigate();

    const detalha = () => {
        navigate('/detalhes', { state: { dado: farmacia } });
    }
    return (
        <tr className="align-middle">
            <td>{farmacia.nome}</td>
            <td>{farmacia.cnpj}</td>
            <td>{farmacia.celular}</td>
            <td>
                <button className="btn bg-info rounded-pill btn-detail-custom" type="button" onClick={detalha} >Detalhes</button>
            </td>
        </tr >
    )
}