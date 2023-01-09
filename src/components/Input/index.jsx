import React from "react";
import { InputContainert, IconContainer, InputText } from './styles'

const Input = ({leftIcon, name, ...rest}) => {
    return(
        <InputContainert>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}/>
        </InputContainert>
    )
}
export { Input };