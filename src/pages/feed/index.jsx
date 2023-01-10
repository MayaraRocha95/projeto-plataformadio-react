
import { Header } from "../../components/Header";
import { Card } from '../../components/Card';
import { UserInfo } from  "../../components/UserInfo";
import { Container,Column, Title, TitleHighlight} from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={4}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          
         
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5  TOP DA SEMANA</TitleHighlight>
        <UserInfo percentual={100} nome="Mayara Rocha" image="https://avatars.githubusercontent.com/u/98711190?v=4"/>
        <UserInfo percentual={90} nome="Mayara Rocha" image="https://avatars.githubusercontent.com/u/98711190?v=4"/>
        <UserInfo percentual={80} nome="Mayara Rocha" image="https://avatars.githubusercontent.com/u/98711190?v=4"/>
        <UserInfo percentual={70} nome="Mayara Rocha" image="https://avatars.githubusercontent.com/u/98711190?v=4"/>
        <UserInfo percentual={70} nome="Mayara Rocha" image="https://avatars.githubusercontent.com/u/98711190?v=4"/>

        </Column>
        
      </Container>
      </>
  );
};

export { Feed };
