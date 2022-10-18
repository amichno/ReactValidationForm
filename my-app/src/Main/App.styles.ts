import styled from 'styled-components';
import { variables } from '../assets/variables';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${variables.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CentralWrapper = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`