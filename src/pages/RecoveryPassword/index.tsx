import React from 'react'
import BackgroundContainer from '../../components/backgroundContainer';
import Container from '../../components/container';
import Input from '../../components/input';
import Title from '../../components/title';
import Subtitle from '../../components/subtitle';
import styles from './RecoveryPassword.module.scss'
import Button from '../../components/button/Button';

const RecoveryPassword = () => {
  return (
    <BackgroundContainer>
        <Container>
        <Subtitle subtitle="recupere sua senha"/>
        <Title title="Insira sua nova senha"/>
            <form className={styles.formRecoveryPassword}>
                <Input
                    type='password'
                    label="Nova senha"
                    placeholder="Insira sua nova senha"
                    name="password"
                    required
                />

                <Input
                    type='password'
                    label="Confirme sua nova senha"
                    placeholder="Insire sua senha"
                    name="password"
                    required
                />
                <Button 
                    type="submit"
                    width='100%'
                    marginTop= "1rem"
                    >
                    Confirmar nova senha
                </Button>
            </form>

        </Container>
    </BackgroundContainer>
  )
}


export default RecoveryPassword;