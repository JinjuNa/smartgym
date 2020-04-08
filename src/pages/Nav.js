import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    padding: 25px 0;
    background-color: rgba(70,111,166,0.80);
    position : absolute;
    width:100%;
    top:0;
    left:0;
    z-index:999;
`

const Logo = styled.div`
    float:left;
`

const Navbar = styled.ul`
    float:right;

    & li a {
        padding :10px;
        color : #fff;
        font-size:14px;
        line-height:14px;
    }
`
export default function Nav() {
    return (
        <HeaderContainer>
            <div className="wrap clear">
            <Logo>
                <a href="/"><img src="/assets/images/common/gym-logo1.png" alt="logo"/></a>
            </Logo>
            <Navbar className="navbar-nav">
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/join">Why join</a>
                </li>
                <li>
                    <a href="/system">System</a>
                </li>
                <li>
                    <a href="/program">Program</a>
                </li>
                <li>
                    <a href="/center">Center</a>
                </li>
                <li>
                    <a href="/franchise">Franchise</a>
                </li>
            </Navbar>
            </div>
        </HeaderContainer>
    )
}