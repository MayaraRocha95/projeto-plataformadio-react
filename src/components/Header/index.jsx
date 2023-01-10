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
    UserPicture
     } from  './styles';
import { Button } from  '../Button';


const Header = ({autenticado}) => {
    return(
       <Wrapper>
         <Container>
         <Row>
                <img src={logo} alt=" Logo da Dio" />
                {autenticado ? (
                <>
                <BuscadorInputContainer>
                <Input  placeholder='Buscar...'/>
                </BuscadorInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/98711190?v=4" />
                    
                ) : (
                    <>

                       <MenuRight href='#'>Home</MenuRight>
                       <Button title="Entrar"/>
                       <Button title="Cadastrar"/>
                    </>
                )}
             </Row>   
         </Container>
       </Wrapper>
    )
}

export { Header }