import { Link } from 'react-router-dom'

export const CardFarmacia = ({ farmacia }) => {

    return (
        <tr>
            <td>{farmacia.nome}</td>
            <td>{farmacia.cnpj}</td>
            <td>{farmacia.celular}</td>
            <td>
                <Link to="/detalhes" dadosFarmacia={farmacia}>
                    <button type="button" data-bs-toggle="modal" data-bs-target={`#${farmacia.id}`} >Detalhes</button>
                </Link>
            </td>
            {/* Modal */}
        </tr>
    )
} 