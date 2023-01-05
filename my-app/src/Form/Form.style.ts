import styled from 'styled-components';
import { variables } from '../assets/variables';

interface IWrapperProps {
  isWhite?: boolean;
  hasInput?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  //height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${(props) =>
    props.isWhite ? variables.white : variables.blue};
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: ${(props) => (props.hasInput ? '20px 10px' : '0px')};
  margin-bottom: ${(props) => (props.hasInput ? null : '1rem')};
  p {
    color: white;
    text-align: center;
  }
  span {
    font-weight: bold;
  }
`;

export const FormDiv = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorWrapper = styled.span`
  width: 80%;
  font-size: 0.7rem;
  font-style: italic;
  color: ${variables.primaryRed};
  text-align: right;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 2rem;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid ${variables.grayishBlue};
  margin: 5px 5px;
  padding: 5px 5px;
  &:invalid {
    border: 5px solid green;
  }
  &:required {
    border: 5px solid green;
  }
  &:invalid:required {
    border: 5px solid green;
  }
  &:focus {
    border: 1px solid ${variables.black};
  }
`;
