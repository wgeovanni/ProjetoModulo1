import { CardMedicamento } from '../Card/CardMedicamento'
import { useData } from '../../context/useData';
import { useState } from 'react';


export const MedicamentoGrid = () => {

    //Array de medicamentos acessado do contexto através de customHook
    const { medicamento } = useData();

    //Variável que recebe o valor digitado pelo usuário
    const [filtro, setFiltro] = useState("");

    //Transforma as letras digitadas para minúsculas
    let filtroLower = filtro.toLowerCase();

    //Verifica se filtro está vazio, se não estiver compara com o nome
    //do medicamento e devolve este medicamento
    const medFiltrado = filtroLower.length > 0 ?
        medicamento.filter((med) => med.nomeMed.toLowerCase().includes(filtroLower)) :
        medicamento

    return (
        <section className="row">

            {/* Barra de buscar medicamento */}
            <div className="container-fluid mb-3">
                <form className="form" role="search">

                    <div className="input-group">
                        <i className="bi-search input-group-text" />
                        <div className="form-floating">
                            <input className="form-control" type="search" placeholder="Buscar medicamento"
                                aria-label="Search" id="filtro" value={filtro}
                                onChange={(event) => setFiltro(event.target.value)} />
                            <label htmlFor="filtro">Buscar Medicamento</label>
                        </div>
                    </div>

                </form>
                <hr className="border-3 w-100" />
            </div>

            {/* Gera um card de cada medicamento */}
            {filtro.length > 0 ?
                (
                    medFiltrado.map((medicamento) => {

                        return (
                            <div className="col-lg-4 col-md-6 mb-3 text-center" key={medicamento.id}>
                                <CardMedicamento medicamento={medicamento} />
                            </div>
                        )
                    })
                ) :

                medicamento.map((medicamento) => {

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