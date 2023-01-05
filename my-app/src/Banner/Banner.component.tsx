import React from "react";

import { banner_basic_text, banner_header_text } from "../assets/consts";
import { HalfDiv, BannerText, BasicText, Header } from "./Banner.styles";




const Banner: React.FunctionComponent = () =>{

    return(
        <HalfDiv>
            <BannerText>
                <Header>
                    {banner_header_text}
                </Header>
                <BasicText>
                    {banner_basic_text}
                </BasicText>
            </BannerText>
        </HalfDiv>
    )
}

export default Banner;