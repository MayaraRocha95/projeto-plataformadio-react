import React from 'react';
import logo from '../../assets/logo-dio.png';

import {
    Wrapper,
    Container,
    Row,
    MenuRight,
    BuscadorInputContainer,
    Input,
    Menu,
    Column,
    UserPicture,
    } from  './styles';
import { Button } from  '../Button';


const Header = () => {
    return(
       <Wrapper>
         <Container>
         <Row>
                <img src={logo} alt=" Logo da Dio" />
                < BuscadorInputContainer>
                <Input  placeholder='Buscar...'/>
                </BuscadorInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
         </Container>
       </Wrapper>
    )
}

export { Header }