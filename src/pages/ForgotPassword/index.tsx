import React from 'react'
import styles from './ForgotPassword.module.scss'
import Container from '../../components/container'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input'
import BackgroundContainer from '../../components/backgroundContainer'


const ForgotPassword = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Subtitle subtitle="recupere sua senha"/>
        <Title title="Insira seu e-mail cadastrado"/>
          <form className={styles.formForgotPassword}>
            <Input
                type='email'
                label="Email"
                placeholder="Digite seu e-mail"
                name="email"
                required
            />
            <Button 
              type="submit"
              width='100%'
              marginTop= "1rem"
            >
              Redefinir senha
            </Button>
          </form>     
      </Container>
    </BackgroundContainer>
  )
}

export default ForgotPassword;
