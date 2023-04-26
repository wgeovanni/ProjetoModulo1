import { Link } from 'react-router-dom'
import { useData } from '../../context/useData'

export const Header = () => {

    const { varHidden, validaForm } = useData();

    return (
        <header className="p-2">

            <nav className="navbar navbar-expand-md">

                <Link to={'/'} className="navbar-brand">
                    <img src="../../../src/assets/logo.png" alt="Logo do sistema" />
                </Link>

                <button className="navbar-toggler btn-custom mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
                    <div className="navbar-nav">
                        <div className="dropdown-center">
                            <button className="btn btn-custom-listas me-2 mb-2 dropdown-toggle"
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
                            <button className="btn btn-custom-listas me-5 mb-2 nav-button dropdown-toggle"
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

                        <div className="nav-item dropdown-center">
                            <button className="btn btn-custom nav-item mb-2" hidden={!varHidden}
                                onClick={validaForm}>Login</button>
                        </div>

                        <div className="nav-item dropdown-center">
                            <Link to='/' className="nav-item mb-2">
                                <button className="btn btn-outline-primary" hidden={varHidden}>Logout</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav >

        </header >
    );
};