import React from 'react';
import styled from 'styled-components';
const FooterContainer = styled.div`
    width:100%;
    background-color:#454545;
`
const FootImg = styled.img`
    vertical-align:top;
    margin-top:30px;
`
const FootText = styled.div`
    display:inline-block;
    color:#eee;
    padding:20px;
`
export default function Footer() {
    return (
        <FooterContainer>
        <div className="wrap">
            <FootImg src="/assets/images/common/logo.jpg" alt="logo-footer"/>
            <FootText>
            (주)스마트핏 대표자 : 박일봉 | 개인정보 책임자 : 노근역 <br />
            부산광역시 해운대구 수영강변대로 140 (우동1466-1) 부산문화콘텐츠콤플렉스 712호<br />
            사업자등록번호 : 621-86-10575 | 통신판매번호 : 제2014-부산금정-0149호<br />
            대표전화 : 051-583-9645 | FAX : 051-518-9643 <br/ >
            Copyright ＠2017~2018 SMARTFIT all rights reserved.	
            </FootText>
        </div>
        </FooterContainer>
    )
}