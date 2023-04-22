import { CardMedicamento } from '../Card/CardMedicamento'
import { useData } from '../../context/useData';

export const MedicamentoGrid = () => {

    const { medicamento } = useData();

    return (
        <section className="row">


            {/* Gera um card de cada medicamento */}
            {medicamento.map((medicamento) => {
                return (

                    <div className="col-lg-4 col-md-6 mb-3 text-center" key={medicamento.id}>
                        <CardMedicamento medicamento={medicamento} />
                    </div>
                )
            })
            }

        </section >
    )
};