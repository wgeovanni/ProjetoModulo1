import { Farmacia } from "../Card/Farmacia";
import { useData } from "../../context/useData"

export const FarmaciaTable = () => {

    const { farmacia } = useData();
    return (

        <table className="table table-info table-bordered rounded border-dark table-striped mt-4 text-center">

            {/* Cabeçalho da tabela */}
            < thead >
                <tr>
                    <th>Nome Fantasia</th>
                    <th>CNPJ</th>
                    <th>WhatsApp</th>
                    <th>Ações</th>
                </tr>
            </thead >

            {/* Corpo da tabela com os dados */}
            < tbody className="table-group-divider" >
                {
                    farmacia.map((farmacia) => {
                        return < Farmacia key={farmacia.id} farmacia={farmacia} />
                    })
                }
            </tbody >
        </table >
    )
}