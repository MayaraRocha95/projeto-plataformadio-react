import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 39px;
  line-height: 44px;
  width: 450px;
  color: #ffffff;
  margin-bottom: 20px;
  text-decoration: none;
`;
export const TitleHighlight = styled.span`
  background: linear-gradient(90.33deg, rgb(166, 75, 214) 0.1%, rgb(227, 18, 96) 55.24%);
  font-weight: 900;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 3px;
  font-size: 52px  
`;
export const TextContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  width: 420px;
  color: #ffffff;
  margin-bottom: 20px;

`;
