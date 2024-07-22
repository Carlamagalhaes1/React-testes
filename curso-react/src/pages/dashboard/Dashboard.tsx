import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const Dashboard = () => {

    const nave = useNavigate();
    const [ email, setEmail] = useState('');
    const [ nome, setNome] = useState('');
    const [ senha, setSenha ] = useState('');

    /*useEffect( () => {
        if ( window.confirm('Você é Homem?')){
            console.log('Homem')
        } else {
            console.log('Mulher')
        }
    
    }, []);*/

    useEffect( () => {
        console.log(nome)
        console.log(email)
        console.log(senha)
       
    }, [email, senha, nome]);

    const handleClick = () => {
        nave('/login')

    }

    const emailLength = useMemo(() => {
        return email.length * 10

    }, [email.length]);

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
                    <p>Quantidade de caracteres no Email:{emailLength} </p>
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