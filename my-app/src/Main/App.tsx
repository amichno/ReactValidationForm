import React from 'react';
import './App.css';
import styled from 'styled-components';
import { variables } from '../assets/variables';
import { CentralWrapper, MainWrapper } from './App.styles';
import Form from '../Form/Form.component';
import Banner from '../Banner/Banner.component';





const App:React.FunctionComponent= () => {
  return (
    <MainWrapper>
      <CentralWrapper>
          <Banner />
          <Form />
      </CentralWrapper>
    </MainWrapper>
  );
}

export default App;
