import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const Dashboard = () => {

    const nave = useNavigate();
    const [ email, setEmail] = useState('');
    const [ nome, setNome] = useState('');
    const [ senha, setSenha ] = useState('');

    const handleClick = () => {
        nave('/login')

    }

    const handleEntrar = () =>{
        console.log(nome)
        console.log(email)
        console.log(senha)

    }
    return (
        <div>
            <p>Dash</p>
            <Link to='/login'> Ir para Login</Link>
            <div>
                <button onClick={handleClick}>Ir para login</button>
            </div>
            <div>
                <form>
                    <label>
                        <span>Nome: </span>
                        <input value={nome} onChange={e => setNome(e.target.value) } />
                    </label>
                    <label>
                        <span>Email: </span>
                        <input value={email} onChange={ e => setEmail( e.target.value)} />
                    </label>
                    <label>
                        <span>Senha: </span>
                        <input type='password' value={senha} onChange={ e => setSenha(e.target.value)} />
                    </label>
                    <button type='button' onClick={handleEntrar}>Entrar</button>
                </form>
            </div>





        </div>



    )
}