import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <img src="../../../src/assets/logo.png" className="logo" alt="Logo do sistema" width="200px" />
            <nav className="menu">
                <Link to='/cadastrofarmacia'>Farmácias</Link>
                <Link to='/cadastromedicamento'>Medicamentos</Link>
                <Link to='/listamedicamento'>Lista de Medicamentos</Link>
                <Link to='/listafarmacia'>Lista de Farmácias</Link>
            </nav>
        </header >
    );
};