import React from "react";
import { FiThumbsUp } from 'react-icons/fi';

import {
    HasInfo,
    PostInfo,
    UserPicture,
    UserInfo,
    Content,
    ImageBackground,
    CardContainer
}from './styles';

const Card = () => {
    return(
       <CardContainer>
        <ImageBackground src="https://solguruz.com/wp-content/uploads/2022/09/ReactJS-Framework-Benefits.png" />
        <Content>
            < UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/98711190?v=4" />
                 <div>
                    <h4>Mayara Rocha</h4>
                    <p>Há 8 minutos</p>
                 </div>
            </UserInfo>
             <PostInfo>
                <h4>Projeto para curso de HTML e Css</h4>
                <p>Projeto feitop o curso de html e css no Bootcamp dio do Global...<strong>Saiba Mais</strong></p>
             </PostInfo>
             <HasInfo>
                <h4>#HTML  #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp/> 16
                </p>
             </HasInfo>
        </Content>
       </CardContainer>
    )
}

export { Card }