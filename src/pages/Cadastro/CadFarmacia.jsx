import { useContext } from "react"
import { FormCadFarmacia } from "../../components/Formularios/FormCadFarmacia/FormCadFarmacia.jsx"
import { dataContext } from "../../context/dataContext.jsx"

export const CadFarmacia = () => {

    return (
        <div>
            <FormCadFarmacia />
        </div>
    )
}