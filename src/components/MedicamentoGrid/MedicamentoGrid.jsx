import { CardMedicamento } from '../Card/CardMedicamento'
import { useEffect } from 'react';
import { useData } from '../../context/useData';

export const MedicamentoGrid = () => {

    const { medicamento, buscaMedicamento } = useData();

    useEffect(() => {
        buscaMedicamento();
    }, [])


    return (
        <section className='row'>
            <div className="col-3 mb-2 mr-2">
                {medicamento.map((medicamento) => {
                    return <CardMedicamento key={medicamento.nomeMed} medicamento={medicamento} />
                })}
            </div>
        </section >
    )
};