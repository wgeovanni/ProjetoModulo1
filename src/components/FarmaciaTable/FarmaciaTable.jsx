import { Farmacia } from "../Formularios/FormDetalheFarm/Farmacia";
import { useData } from "../../context/useData";

export const FarmaciaTable = () => {

    const { farmacia } = useData();
    return (

        <div className=" overflow-x-auto">
            <table className="table bg-info-subtle border-dark table-striped-columns 
        table-custom mt-4 text-center">

                {/* Cabeçalho da tabela */}
                <thead>
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
        </div>
    )
}