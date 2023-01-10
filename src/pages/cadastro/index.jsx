import { MdEmail, MdLock, MdPerson,MdSettingsCell } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import React from 'react';
import {Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, ForText, CreateText, Range } from "./styles";
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from  'yup';

const schema = yup.object({
  email: yup.string().email('email já não é válido').required(),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
}).required();


const Cadastro = () => {
  const navigate = useNavigate();


  const { control, handleSubmit,  formState : {errors}} = useForm({
    resolver : yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = data => console.log(data);

  const handleClickSignIn = () => {
   navigate('/feed')
  }
  
  return (
    <>
      <Header />
      <Container>
        <Column>
              <Range/>
              <br/>
            <Title>

            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
            
        </Column>
        <Column>
          <Wrapper>
            <Range />
           
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          </Wrapper>
           <form onSubmit={handleSubmit(onSubmit)}>
           <Input control={control} type="text" name="name"placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
            <Input control={control}  errorMessage={errors?.email?.message} type="email" name="email" placeholder="E-mail" leftIcon={<MdEmail/>}/>
            <Input control={control} type="phone" name="phone" placeholder="Celular ex: (11)9999-9999" leftIcon={<MdSettingsCell/>}/>
            <Input control={control} errorMessage={errors?.password?.message} type="password" name="password" placeholder="Senha" leftIcon={<MdLock/>}/>
         
            <Button title="CRIAR MINHA CONTA GRÁTIS" variant="secondary" onClick={()=>handleClickSignIn()} type="button"/>
           </form>
            <Row>
              <ForText>Ao clicar em "criar minha conta grátis", declaro que aceito as <strong>Políticas de Privacidade </strong> e os <strong>Termos de Uso da DIO.</strong></ForText>
              <br/>
           </Row>  
           <Row>
              <CreateText>Já tenho conta.<strong>Fazer login.</strong> </CreateText>
           </Row>
            
       
        </Column>
      </Container>
      </>
  );
};

export { Cadastro };
