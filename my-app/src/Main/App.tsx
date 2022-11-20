import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { variables } from '../assets/variables';
import { CentralWrapper, MainWrapper } from './App.styles';
import Form from '../Form/Form.component';
import Banner from '../Banner/Banner.component';





const App:React.FunctionComponent= () => {

  useEffect(()=>{
    let cos = document.getElementsByClassName("cls-1");//.setAttribute("fill", "red");
    console.log('cos ', cos);
    //console.log('cos ', cos?.style);
  }
  
  ,[])
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


const esvg = ()=>{
  return(
    <div>
      
    </div>
  )
}