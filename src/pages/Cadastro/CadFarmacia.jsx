import { useContext } from "react"
import { FormCadFarmacia } from "../../components/Formularios/FormCadFarmacia/formCadFarmacia.jsx"
import { dataContext } from "../../context/dataContext.jsx"

export const CadFarmacia = () => {

    return (
        <div>
            <FormCadFarmacia />
        </div>
    )
}