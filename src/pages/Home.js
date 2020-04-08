import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import MainBanner from './MainBanner';

const Section = styled.div`
    width:70%;
    margin:30px auto;
`
const Box = styled.div`
    width:40%;
    display:inline-block;
    margin:20px;
    // box-sizing:border-box;
    height:200px;
    border-top : 2px solid #eee;
    vertical-align:top;

`

const Home = props => {
    console.log(props);
    return (
        <div>
            <Nav></Nav>
            <MainBanner 
                src='banner-home'
                maintitle='home의 메인 타이틀 입니다.'
                subtitle='좋은 신체는 최고의 장소에서 만들어진다.'
            />
            <div className="wrap">
            <h1>Home</h1>
            <Section>
                <h3>Why Smartgym?</h3>
                <Item content={props.item.content}/>
            </Section>
            </div>
        </div>
    )
}

const Item = props => {
    return props.content.map((product) => {
        const icon = "icon-"+product.icon;
        const txt = product.context;
        let positionClass ="";
        (product.position == "left") ? positionClass = "left" : positionClass = "right";
        return (
            <Box className = {positionClass}>
                <h3>{product.title}</h3>
                <div dangerouslySetInnerHTML={{__html: txt}} />
                <span className={icon}></span>
            </Box>
        )
    })
}

export default Home;