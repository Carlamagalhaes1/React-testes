import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login } from '../pages'

export const Rotas = () => {
    return (
        <BrowserRouter>
         <Routes>
            <Route path='/pagina-inicial'  element={<Dashboard/>}/>
            <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
            <Route path='/login' element={<Login/>} />
         </Routes>
       
        </BrowserRouter>
    )
}