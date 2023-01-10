import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import React from 'react';
import {Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, ForText, CreateText, Range } from "./styles";

const Login = () => {
  const navigate = useNavigate();

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
            <br/>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          </Wrapper>
           <form>
            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
         
            <Button title="Entrar" variant="secondary" onClick={()=>handleClickSignIn()} type="button"/>
           </form>
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
