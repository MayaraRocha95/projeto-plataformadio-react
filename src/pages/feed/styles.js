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

export const Title = styled.h3`
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
export const TitleHighlight = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
   color: #FFFffF7D;
  letter-spacing: 1px;
  margin-bottom: 24px; 
`;
export const Column = styled.div`
  flex: ${({flex}) => flex};
  padding-right:24px;

`;
