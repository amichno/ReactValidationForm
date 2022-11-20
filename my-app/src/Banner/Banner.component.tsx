import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from 'styled-components';
import { banner_basic_text, banner_header_text } from "../assets/consts";

const BannerDiv = styled.div`
    flex: 1 1 50%;
    display: flex;
    height: 100%;
    min-width: 375px;
    min-height: fit-content;
    justify-content: center;
    align-items: center;
`

const BannerText = styled.div`
    min-height: fit-content;
    max-width: 375px;
    color: white;
`

const Header = styled.h1`
 font-weight: bold ;

`

const BasicText = styled.p`
    
`


const Banner: React.FunctionComponent = () =>{

    return(
        <BannerDiv>
            <BannerText>
                <Header>
                    {banner_header_text}
                </Header>
                <BasicText>
                    {banner_basic_text}
                </BasicText>
            </BannerText>
        </BannerDiv>
    )
}

export default Banner;