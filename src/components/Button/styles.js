import styled, { css }from 'styled-components';

export const ButtonContainer = styled.button `
background: #565656;
border-radius: 22px;
position: relative;
border:none;
color: #1E192c;
padding: 2px 12px;
min-width:120px;
width:100%;
margin-right: 10px;
cursor:pointer;
font-weight: 600;
&:hover {
    opacity: 0.6;
    color:white;
}

${({variant}) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    color: #1E192c;
    font-weight: 900;
    background: #E41050;
    &:hover {
        opacity: 0.6;
    }
    &::after{
        content: '';
        position:absolute;
        border: 3px solid  #E41050;
        top: -5px;
        left:-6px;
        width:calc(100% + 5px);
        height:calc(100% + 5px);
        border-radius: 22px;
    }
`}
`