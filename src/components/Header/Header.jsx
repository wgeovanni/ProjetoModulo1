import { Link } from 'react-router-dom'
import { useData } from '../../context/useData'
import { validaForm } from '../Formularios/FormLogin/FormLogin'

export const Header = () => {

    const { varHidden } = useData();
    return (
        <header>
            <nav>
                <ul className="nav nav-tabs d-flex justify-content-between">
                    <li className="nav-item">
                        <Link to={'/'} className="navbar-brand">
                            <img src="../../../src/assets/logo.png" alt="Logo do sistema" width="50"
                                className="d-inline-block align-text-top" />
                            LABPharmacy Inc.
                        </Link>
                    </li>
                    <div className="d-flex justify-content-between">
                        <li className="nav-item dropdown-center">
                            <button className="btn btn-outline-info me-2 nav-button dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" hidden={varHidden}>Cadastro</button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to='/cadastrofarmacia' className="dropdown-item">Farmácias</Link>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <Link to='/cadastromedicamento' className="dropdown-item">Medicamentos</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown-center">
                            <button className="btn btn-outline-info me-2 nav-button dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" hidden={varHidden}>Listas</button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to='/listafarmacia' className="dropdown-item">Lista de Farmácias</Link>
                                </li>
                                <hr className="dropdown-divider" />
                                <li>
                                    <Link to='/listamedicamento' className="dropdown-item">Lista de Medicamentos</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/' className="nav-item m-2">
                                <button className="btn btn-outline-primary" hidden={!varHidden}
                                    onClick={validaForm}>Login</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="nav-item">
                                <button className="btn btn-outline-primary" hidden={varHidden}>Logout</button>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav >
        </header >
    );
};