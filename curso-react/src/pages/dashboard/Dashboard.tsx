import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const Dashboard = () => {

    const nave = useNavigate();

    const handleClick = () => {
        nave('/login')

    }
    return (
        <div>
            <p>Dash</p>
            <Link to='/login'> Ir para Login</Link>
            <div>
                <button onClick={handleClick}>Ir para login</button>

            </div>





        </div>



    )
}