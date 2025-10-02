import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const Works = styled.section`
    position: relative;
    ${FlexWrapper} {
        gap: 30px; 
    }

    @media ${Theme.media.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Work = styled.div`
    background-color: ${Theme.colors.secondaryBg};
    
    //width: 330px;
    //
    //flex-grow: 1;
    
    ${Link} {
        padding: 10px 0;
        
        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    // @media  ${Theme.media.desktop} {
    //     max-width: 540px;
    // }
    
    
`
const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${Theme.animations.transition};
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        transition: ${Theme.animations.transition};
        opacity: 0;
    } 
    
    &:hover {
        &::before {
             opacity: 1;  
        }
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1
        }
        
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`

const Description = styled.div`
    padding: 25px 20px;
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Title,
    Text,
    Description
}