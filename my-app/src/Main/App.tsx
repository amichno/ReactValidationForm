import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { variables } from '../assets/variables';

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${variables.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

const CentralWrapper = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
`

const App:React.FunctionComponent= () => {
  return (
    <MainWrapper>
      <CentralWrapper>

      </CentralWrapper>
    </MainWrapper>
  );
}

export default App;
