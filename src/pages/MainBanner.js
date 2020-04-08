import React from 'react';
import styled from 'styled-components';

const BannerCaption = styled.div`
    position : absolute;
    top:100px;
    left:0;
    width:100%;
    text-align:center;
    font-size:40px;
    padding:20px 0;

    & p {
        color:#fff;
    }
`

export default function MainBanner(props) {
    return (
        <div className="rel">
            <img
                className="MainImg"
                src={"/assets/images/banner/"+props.src+".jpg"}
                alt={props.src}
            />
            <BannerCaption>
            <h3>{props.maintitle}</h3>
            <p>{props.subtitle}</p>
            </BannerCaption>
        </div>
    )
}