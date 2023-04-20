import { useLocation, useNavigate } from 'react-router-dom'

export const DetalhesFarmacia = () => {

    const navigate = useNavigate();
    const { state } = useLocation();

    console.log(state)

}