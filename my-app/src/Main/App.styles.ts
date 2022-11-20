import styled from 'styled-components';
import { variables } from '../assets/variables';
import BackGroundImage from '../assets/Images/bg-intro-desktop.png';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${variables.backgroundColor};
  background-image: url(${BackGroundImage});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CentralWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
`