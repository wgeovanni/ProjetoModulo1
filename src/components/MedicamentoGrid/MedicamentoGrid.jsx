import { CardMedicamento } from '../Card/CardMedicamento'
import { useData } from '../../context/useData';

export const MedicamentoGrid = () => {

    const { medicamento, medFiltrado, filtrado, filtrar, setFiltro } = useData();

    // const  = (valor) => {
    //     setFiltro(valor);
    //     filtrar(valor);
    // }
    return (
        <section className="row">

            <div className="container-fluid mb-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Digite o nome do medicamento"
                        onChange={(event) => filtrar(event.target.value)} aria-label="Search" />
                    <button className="btn btn-outline-info" type="button" onClick={filtrado}>Buscar</button>
                </form>
            </div>

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