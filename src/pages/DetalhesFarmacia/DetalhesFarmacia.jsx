import { useLocation } from 'react-router-dom'

export const DetalhesFarmacia = () => {

    const location = useLocation();

    console.log(location.state.dado);

    return (
        <p>teste</p>
    )
}