import { useEffect, useState } from "react";
import medicamentoImage from "../../assets/medicamento.png"

export const CardMedicamento = ({ medicamento }) => {

    //Variável que altera a visibilidade de campo vazio
    const [hideDescricao, setHideDescricao] = useState(false);

    //Ao carregar a página verifica se o campo está vazio para não mostrar
    useEffect(() => {
        if (medicamento.descricao == "") {
            setHideDescricao(true);
        }
    }, [hideDescricao])

    return (
        <div className="card text-center">

            {/* Imagem do Card */}
            <div>
                <img className="card-img-top w-75" src={medicamentoImage} alt="Caixa de remédio"
                    title="Caixa de remédio" data-bs-toggle="modal" data-bs-target={`#${medicamento.id}`} />
            </div>

            {/* Modal */}
            <div className="modal fade" tabIndex="-1" id={medicamento.id}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* Cabeçalho do Modal */}
                        <div className="modal-header">
                            <h2 className="modal-title">{medicamento.nomeMed}</h2>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Fechar modal" />
                        </div>

                        {/* Corpo do Modal */}
                        <div className="modal-body">
                            <p>Nome do Laboratório: {medicamento.nomeLab}</p>
                            <p>Dosagem: {medicamento.dosagem}</p>
                            <p>Valor: R$ {medicamento.preco}</p>
                            <p className={medicamento.tipo == "Medicamento Comum" ? "text-dark" : "text-danger"}>
                                Tipo de medicamento: {medicamento.tipo}
                            </p>
                            <p hidden={hideDescricao}>Descrição: {medicamento.descricao}</p>
                        </div>

                        {/* Footer do Modal */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-modal-custom text-center" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corpo do Card */}
            <div className="card-body">
                <h3 className="card-title">{medicamento.nomeMed} / {medicamento.dosagem}</h3>
                <p className="card-text">{medicamento.nomeLab}</p>
            </div>
        </div >
    )
}