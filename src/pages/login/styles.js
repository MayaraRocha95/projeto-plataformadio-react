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
export const Wrapper = styled.div`
    max-width:300px
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin-top: 20px;
`
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
export const TitleLogin = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  width:100%;
  line-height: 44px;
   color: #ffffff;
  margin-bottom: 20px;
  text-decoration: none;
  white-space: nowrap;
`;
export const SubtitleLogin = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 35px;
   color: #ffffff;
  margin-bottom: 35px;
  
`;
export const ForText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #E5E644;
  cursor:pointer;
`;
export const CreateText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #E23DD7;
  cursor:pointer;
`;
export const Range = styled.div`
height: 0.5rem;
background: linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%);
width: 100%;
max-width: 6rem;
border-radius: 1rem;
text-decoration: none;
`
