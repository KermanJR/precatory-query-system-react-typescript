import Login from '../pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from '../pages/ForgotPassword';
import RecoveryPassword from '../pages/RecoveryPassword';
import Register from '../pages/Register';


const SwitchRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/esqueci-minha-senha" element={<ForgotPassword/>}/>
          <Route path="/login/recupere-sua-senha" element={<RecoveryPassword/>}/>
          <Route path="/cadastro/*" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default SwitchRoutes;
