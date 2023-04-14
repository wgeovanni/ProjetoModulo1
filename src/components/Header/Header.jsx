import { Link } from 'react-router-dom'
import "./header.css";

export const Header = () => {
    return (
        <header>
            <nav className="menu">
                <div className="logo">
                    <img src="../../../src/assets/logo.png" className="logo" alt="Logo do sistema" width="200px" />
                </div>
                <div className="titulo">
                    <h1>PharmaSystem</h1>
                </div>
                <div className="links">
                    <div className="dropdown">
                        <button className="dropdown-btn">Cadastro</button>
                        <div className="dropdown-content">
                            <Link to='/cadastrofarmacia'>Farmácias</Link>
                            <Link to='/cadastromedicamento'>Medicamentos</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">Listas</button>
                        <div className="dropdown-content">
                            <Link to='/listafarmacia'>Lista de Farmácias</Link>
                            <Link to='/listamedicamento'>Lista de Medicamentos</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
};