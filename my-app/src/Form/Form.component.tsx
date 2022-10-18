import React from "react";
import styled from 'styled-components';

const FormDiv = styled.div`
    flex: 1 1 50%;
    height: 100%;
`

const Form:React.FunctionComponent = ()=>{
    return(
        <FormDiv>
            Formularz
        </FormDiv>
    )
}

export default Form;