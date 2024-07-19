import { BrowserRouter , Routes, Route } from 'react-router-dom'

export const Rotas = () => {
    return (
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<h1>Olá</h1>}/>
         </Routes>

        </BrowserRouter>
    )
}