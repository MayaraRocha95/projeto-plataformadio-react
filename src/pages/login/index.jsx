import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import React from 'react';
import { useForm } from 'react-hook-form'
import {Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, ForText, CreateText, Range } from "./styles";
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from  'yup';

const schema = yup.object({
  email: yup.string().email('email já não é válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();


const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit,  formState : {errors}} = useForm({
    resolver : yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = data => console.log(data);
  const handleClickSignUp = () => {
   navigate('/cadastro')
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
            <br/>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          </Wrapper>
           <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="E-mail" errorMessage={errors?.email?.message} control={control} name="email" type="email" leftIcon={<MdEmail/>}/>
            <Input placeholder="Senha" control={control} errorMessage={errors?.password?.message} name="password" type="password" leftIcon={<MdLock/>}/>
         
            <Button title="Entrar" variant="secondary" onClick={()=>handleClickSignUp()} type="button"/>
           </form >
            <Row>
              <ForText> Esqueci minha senha</ForText>
              <CreateText>Criar Conta</CreateText>
            </Row>
        </Column>
      </Container>
      </>
  );
};

export { Login };
