import React from 'react';
import { HalfDiv } from '../Banner/Banner.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { strings } from '../loc/pl-pl';
import { ErrorWrapper, FormDiv, Input, Wrapper } from './Form.style';

type inputData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Form: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<inputData>();
  const onSubmit: SubmitHandler<inputData> = (data: any) => {
    console.log(data);
  };

  return (
    <HalfDiv>
      <Wrapper hasInput={false} isWhite={false}>
        <p>
          <span>Try it free 7 days</span> then 20/mo. thereafter
        </p>
      </Wrapper>

      <Wrapper isWhite={true} hasInput={true}>
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={strings.firstName}
            {...register('firstName', { required: true })}
          ></Input>
          {errors.firstName && (
            <ErrorWrapper>{strings.errorFirstName}</ErrorWrapper>
          )}
          <Input
            placeholder={strings.lastName}
            {...register('lastName', { required: true })}
          ></Input>
          {errors.lastName && (
            <ErrorWrapper>{strings.errorLastName}</ErrorWrapper>
          )}
          <Input
            placeholder={strings.emailAddress}
            {...register('email', { required: true })}
          ></Input>
          {errors.email && <ErrorWrapper>{strings.errorEmail}</ErrorWrapper>}
          <Input
            placeholder={strings.password}
            {...register('password', { required: true })}
          ></Input>
          {errors.password && (
            <ErrorWrapper>{strings.errorPassword}</ErrorWrapper>
          )}
          <Input type='submit' />
        </FormDiv>
      </Wrapper>
    </HalfDiv>
  );
};

export default Form;
