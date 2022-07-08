
import { Link } from 'react-router-dom';
import Container from '../../components/container';
import Subtitle from '../../components/subtitle';
import Title from '../../components/title';
import styles from './Login.module.scss'
import classNames from 'classnames';
import Button from '../../components/button/Button';
import Input from '../../components/input';
import BackgroundContainer from '../../components/backgroundContainer';
import { Select } from '../../components/select';
import Links from '../../components/links';

const Login = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Subtitle subtitle="Área restrita"/>
        <Title title="Faça seu login"/>
          <form className={styles.login}>
            <Select/>
            <Input
              type='email'
              label="Email"
              placeholder="Digite seu e-mail"
              name="email"
              required
            />

            <Input
              type='password'
              label="Senha"
              placeholder="Digite sua senha"
              name="password"
              required
            />
            
            <div className={classNames({
            [styles["login__forgot--password"]]: true
            })}>
              <Link to="/login/esqueci-minha-senha">Esqueci minha senha</Link>
            </div>

            <Button 
              type="submit"
              width='100%'
              marginTop=''
            >
              Enviar
            </Button>
          </form>

          <Links 
              route="/cadastro/passo-1"
              text="Não possui uma conta?"
              link="Criar conta"
          />
          
      </Container>
    </BackgroundContainer>
  )
}

export default Login;
