
import BackgroundContainer from '../../components/backgroundContainer'
import Container from '../../components/container'
import { Route, Routes } from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'

const Register = () => {
  return (
    <BackgroundContainer>
        <Container>
            <Routes>
                <Route path="/passo-1" element={<StepOne/>}/>
                <Route path="/passo-2" element={<StepTwo/>}/>
            </Routes>
        </Container>
    </BackgroundContainer>
  )
}

export default Register;
