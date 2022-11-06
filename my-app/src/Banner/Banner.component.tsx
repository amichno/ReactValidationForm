import React from "react";
import styled from 'styled-components';

const BannerDiv = styled.div`
    flex: 1 1 50%;
    height: 100%;
    min-width: 375px;
`


const Banner: React.FunctionComponent = () =>{

    return(
        <BannerDiv>
            Bannerek
        </BannerDiv>
    )
}

export default Banner;