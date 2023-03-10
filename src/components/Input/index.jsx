import React from "react";
import { InputContainert, IconContainer, InputText, ErrorText } from './styles'
import {  Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
    return(<>
        <InputContainert>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
        name={name}
        control={control}
        rules={{ required: true}}
        render={({field}) => <InputText {...field} {...rest}/>}
        />
        
        </InputContainert>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}
export { Input };