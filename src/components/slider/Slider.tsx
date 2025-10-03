import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Slider_Styles";
import './../../styles/slider.css'
type SLidePropsType  = {
    text: string
    userName: string
}

const Slide = (props: SLidePropsType) => {
    return(
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide userName={'Илюшка Ожог'}
           text={'Дааа, она всё-таки украсила мою жизнь...'}  />,
    <Slide userName={'Ондрик Гарницкий'}
           text={'Я так подумав, все ж таки я бiльше сiльпо, нiж вона'}  />,
    <Slide userName={'ivan ivanow'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}  />,
    <Slide userName={'piort petrov'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}  />,
    <Slide userName={'igor igorev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}  />
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);

