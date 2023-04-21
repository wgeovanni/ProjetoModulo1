import { FormCadMedicamentos } from "../../components/Formularios/FormCadMedicamento/FormCadMedicamentos"

export const CadMedicamento = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-4">Cadastro de Medicamento</h2>
            <FormCadMedicamentos />
        </div>
    )
}