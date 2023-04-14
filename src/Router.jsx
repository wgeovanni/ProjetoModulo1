import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Login } from './pages/Login/Login.jsx'
import { ListFarmacia } from './pages/ListagemFarmacia/ListFarmacia.jsx'
import { CadFarmacia } from './pages/Cadastro/CadFarmacia.jsx'
import { CadMedicamento } from './pages/Cadastro/CadMedicamento.jsx'
import { ListMedicamento } from './pages/ListagemMedicamentos/ListMedicamento.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/listafarmacia',
                element: <ListFarmacia />,
            },
            {
                path: '/cadastrofarmacia',
                element: <CadFarmacia />,
            },
            {
                path: '/cadastromedicamento',
                element: <CadMedicamento />,
            },
            {
                path: '/listamedicamento',
                element: <ListMedicamento />
            }
        ]
    }
])