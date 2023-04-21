import { CardMedicamento } from '../Card/CardMedicamento'
import { useEffect } from 'react';
import { useData } from '../../context/useData';

export const MedicamentoGrid = () => {

    const { medicamento } = useData();

    return (
        <section className='row'>
            {/* Gera um card de cada medicamento */}
            {medicamento.map((medicamento) => {
                return (<div className="col-3 mb-2 mr-2" key={medicamento.id}>
                    <CardMedicamento medicamento={medicamento} />
                </div>
                )
            })}
        </section >
    )
};