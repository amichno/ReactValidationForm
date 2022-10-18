import React from "react";
import styled from 'styled-components';

const BannerDiv = styled.div`
    flex: 1 1 50%;
    height: 100%;
`


const Banner: React.FunctionComponent = () =>{

    return(
        <BannerDiv>
            Bannerek
        </BannerDiv>
    )
}

export default Banner;