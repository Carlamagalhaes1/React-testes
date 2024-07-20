import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pagina-principal')


    }
   

    return (

        <div>
            <p>Login</p>
            <button onClick={handleClick}>Voltar para dash</button>

            
        </div>
    );
}