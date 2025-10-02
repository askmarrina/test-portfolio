import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
    
     ${font({family: "'Josefin Sans', sans-serif",  weight: 600, Fmax: 36, Fmin: 30})}
    text-align: center;
    //font-family: 'Josefin Sans', sans-serif;
    //font-weight: 600;
    //font-size: 36px;
    letter-spacing: 5px;
    position: relative; 
    margin-bottom: 90px;
    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        width: 55px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media ${Theme.media.mobile}{
            bottom: -24px;
        }
    }
`