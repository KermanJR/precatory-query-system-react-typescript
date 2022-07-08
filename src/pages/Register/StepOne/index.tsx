import BackgroundContainer from "../../../components/backgroundContainer";
import Container from "../../../components/container";
import Subtitle from "../../../components/subtitle";
import Title from "../../../components/title";
import Input from "../../../components/input";
import { Checkbox } from "../../../components/checkbox";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import styles from './StepOne.module.scss'
import React from "react";
import Links from "../../../components/links";

const StepOne = () => {
    return (
        <React.Fragment>
              <Subtitle subtitle="Passo 1/2"/>
              <Title title="Crie sua conta"/>
              <form className={styles.formRegister}>
                  <Input
                      type='email'
                      label="E-mail"
                      placeholder="Insira seu e-mail"
                      name="email"
                      required
                  />
                  <Input
                      type='password'
                      label="Senha"
                      placeholder="Insira sua senha"
                      name="password"
                      required
                  />
  
                  <Checkbox
                      text="Li e aceito os Termos de uso e Política de Privacidade"
                  />
                  <Checkbox
                      text="Desejo receber atualizações sobre notícias, eventos e ofertas"
                  />
  
                  <Button
                      width='100%'
                      type='submit'
                      marginTop='1rem'
                  >Continuar
                  </Button>
              </form>

            <Links 
              route="/login"
              text="Já possui uma conta?"
              link="Fazer login"
            />
            
  
        </React.Fragment>
    )
  }
  
  export default StepOne;
  