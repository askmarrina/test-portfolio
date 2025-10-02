import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    @media ${Theme.media.mobile} {
        width: 310px;
        height: 380px;
        
    }
`
const Main = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
`

const MainTitle = styled.h1`
    //font-weight: 400;
    //font-size: 27px;
    ${font({family: "'Josefin Sans', sans-serif", weight: 400, Fmax: 27,  Fmin: 20})}
    text-align: start;
    p {
        display: none;
    }
`
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50,  Fmin: 36})};
    //font-family: 'Josefin Sans', sans-serif;
    //font-weight: 700;
    //font-size: 50px;
    letter-spacing: 0.05em;
    text-align: start;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap; 
        
        &::before {
            content: ' ';
            display: inline-block;
            width: 100%;
            height: 0.35em;
            background-color: ${Theme.colors.accent};
            position: absolute;
            bottom: 0.1em;
            z-index: -1;
        }
    }
    
    @media ${Theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
    
    text-align: start;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${Theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
    }

        @media ${Theme.media.mobile} {
            margin-top: 65px;
        }
    }
`

export const S = {
    Main,
    PhotoWrapper,
    MainTitle,
    Photo,
    Name,
    SmallText
}