import React from 'react'
import Subtitle from "../../../components/subtitle";
import Title from "../../../components/title";
import Input from "../../../components/input";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import styles from './StepTwo.module.scss'
import { Select } from '../../../components/select';
import Links from '../../../components/links';



const StepTwo = () => {
    return (
        <React.Fragment>
              <Subtitle subtitle="Passo 2/2"/>
              <Title title="Complete seu cadastro"/>
              <form className={styles.formRegisterStepTwo}>
                  <Input
                      type='text'
                      label="Nome"
                      placeholder="Insira seu nome"
                      name="name"
                      required
                  />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gridGap: "20px"
                    }}
                  >
                    <Input
                        type='text'
                        label="Senha"
                        placeholder="Insira sua senha"
                        name="password"
                        required
                    />
                    <Select
                        
                    />
                </div>
                  
                <Select/>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gridGap: "20px"
                    }}
                  >
                    <Input
                        type='text'
                        label="CEP"
                        placeholder="Insira"
                        name="cep"
                        required
                    />
                    <Input
                        type='text'
                        label="Estado"
                        placeholder="Insira"
                        name="estado"
                        required
                    />

                    <Input
                        type='text'
                        label="Cidade"
                        placeholder="Insira"
                        name="cidade"
                        required
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr .5fr",
                        alignItems: "center",
                        gridGap: "20px"
                    }}
                  >
                    <Input
                        type='text'
                        label="Endereço"
                        placeholder="Insira"
                        name="endereco"
                        required
                    />
                    <Input
                        type='text'
                        label="N°"
                        placeholder="Insira"
                        name="numero"
                        required
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gridGap: "20px"
                    }}
                  >
                    <Input
                        type='text'
                        label="Data de nascimento"
                        placeholder="Insira"
                        name="dtnascimento"
                        required
                    />
                    <Input
                        type='text'
                        label="Número de telefone"
                        placeholder="Insira"
                        name="telefone"
                        required
                    />
                </div>
                
                  

  
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

export default StepTwo;
