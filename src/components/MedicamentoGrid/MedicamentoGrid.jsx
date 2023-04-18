import { CardMedicamento } from '../Card/CardMedicamento'
import { useEffect } from 'react';
import { useData } from '../../context/useData';

export const MedicamentoGrid = () => {

    const { medicamento, buscaMedicamento } = useData();

    useEffect(() => {
        buscaMedicamento();
    }, [])

    return (
        <section>
            <div>
                {medicamento.map((medicamento) => {
                    return <CardMedicamento key={medicamento.nomeMed} medicamento={medicamento} />
                })}
            </div>
        </section>
    )
};