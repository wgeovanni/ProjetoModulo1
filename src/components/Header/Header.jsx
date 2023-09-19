import { Link } from 'react-router-dom'
import { useData } from '../../context/useData'
import logoImage from '../../assets/logo.png'

export const Header = () => {

    //Variável usada para setar a visibilidade do elemento através de customHook
    const { varHidden } = useData();

    return (
        <header className="p-2">

            <nav className="navbar navbar-expand-md">

                <Link to={'/'} className="navbar-brand">
                    <img src={logoImage} alt="Logo do sistema" />
                </Link>

                <button className="navbar-toggler btn-custom mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false"
                    aria-label="Toggle navigation" hidden={varHidden}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
                    <div className="navbar-nav">
                        <div className="dropdown-center">
                            <button className="btn btn-custom me-2 mb-2 dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" hidden={varHidden}>Cadastro</button>
                            <ul className="dropdown-menu mb-2 text-center">
                                <li>
                                    <Link to='/cadastrofarmacia' className="dropdown-item">Farmácias</Link>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <Link to='/cadastromedicamento' className="dropdown-item">Medicamentos</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown-center">
                            <button className="btn btn-custom me-5 mb-2 nav-button dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" hidden={varHidden}>Listas</button>
                            <ul className="dropdown-menu mb-2 text-center">
                                <li>
                                    <Link to='/listafarmacia' className="dropdown-item">Lista de Farmácias</Link>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <Link to='/listamedicamento' className="dropdown-item">Lista de Medicamentos</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown-center">

                            <button className="btn btn-custom-logout"
                                data-bs-toggle="modal" data-bs-target="#modalLogout"
                                hidden={varHidden}>Logout</button>

                        </div>

                    </div>
                </div>
            </nav >

            {/* Modal de Logout */}
            <div className="modal fade text-center"
                id="modalLogout" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Logout</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Deseja efetuar o Logout?</p>
                        </div>
                        <div className="modal-footer">
                            <div className="row mx-auto">
                                <Link to='/' className="col-auto">
                                    <button type="button" className="btn btn-modal-logout" data-bs-dismiss="modal">Logout</button>
                                </Link>
                                <button type="button" className="btn btn-custom ml 3 col-auto" data-bs-dismiss="modal">Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header >
    );
};