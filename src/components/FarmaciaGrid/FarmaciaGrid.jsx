import { Farmacia } from "../Card/CardFarmacia";
import { useData } from "../../context/useData"
import { useEffect } from "react";

export const FarmaciaTable = () => {

    const { farmacia, buscaFarmacia } = useData();

    useEffect(() => {
        buscaFarmacia();
    }, []);

    return (
        <table className="table table-primary table-bordered border-dark table-striped mt-4">

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