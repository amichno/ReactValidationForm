import React from "react";
import styled from 'styled-components';
import { HalfDiv } from "../Banner/Banner.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { strings } from "../loc/pl-pl";
import { variables } from '../assets/variables';

const Wrapper = styled.div`
    //height: 100%;
`

const Input = styled.input`
width: 80%;
height: 2rem;
border: 1px solid ${variables.black};
margin: 5px 5px;
padding: 5px 5px;
`

type inputData ={
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Form:React.FunctionComponent = ()=>{
    const {register, handleSubmit, watch, formState:{errors}} = useForm<inputData>();
    const onSubmit:SubmitHandler<inputData> = (data:any) =>{console.log(data)};
    console.log(watch('firstName'));
    return(
        <HalfDiv>
            
            <Wrapper>
                Banner 
            </Wrapper>
            
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder={strings.firstName} {...register('firstName',{required:true})} ></Input>
                    {errors.firstName && <span>{strings.errorFirstName}</span>}
                    <Input placeholder={strings.lastName} {...register('lastName',{required:true})}></Input>
                    {errors.lastName && <span>{strings.errorLastName}</span>}
                    <Input placeholder={strings.emailAddress} {...register('email',{required:true})}></Input>
                    {errors.email && <span>{strings.errorEmail}</span>}
                    <Input placeholder={strings.password} {...register('password',{required:true})}></Input>
                    {errors.password && <span>{strings.errorPassword}</span>}
                    <input type='submit'/>
                </form>
            </Wrapper>
            <Wrapper>
                Button
            </Wrapper>
        </HalfDiv>
    )
}

export default Form;