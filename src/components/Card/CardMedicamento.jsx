export const CardMedicamento = ({ medicamento }) => {

    return (
        <div>
            <p>testecard</p>
            <img className="remedio" src="../../../src/assets/medicamento.png" alt="Caixa de remédio"
                title="Caixa de remédio" />
            <h3>{medicamento.nomeMed} {medicamento.dosagem}</h3>
            <p>{medicamento.nomeLab}</p>
        </div>
    )
};