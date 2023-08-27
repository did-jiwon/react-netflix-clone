import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinkContainer>
                    <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
                    <FooterLinkContent>
                        <FooterLink href="https://help.netflix.com/ko/node/412">
                            넷플릭스 소개
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko">
                            고객 센터
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">
                            미디어 센터
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">
                            이용 약관
                        </FooterLink>
                    </FooterLinkContent>
                    <FooterDescContainer>
                        <FooterDescRights>
                            Netflix Rights Reserved.
                        </FooterDescRights>
                    </FooterDescContainer>
                </FooterLinkContainer>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    border-top: 1px solid rgb(25, 25, 25);
    width: 100%;
    position: relative;
    z-index: 100;

    @media (max-width: 769px) {
        padding: 20px 20px;
        padding-bottom: 30px;
    }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
    width: 500px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h1`
    color: gray;
    font-size: 17px;
`;

const FooterLinkContent = styled.div`
    display: flex;
    /* 컨테이너 안에 있는 아이템들 사이의 공간을 어떻게 분배할지 결정 / 이를 설정하면 첫 번째 아이템은 컨테이너의 시작 부분에, 마지막 아이템은 컨테이너의 끝 부분에 위치하게 되며 나머지 아이템들은 균등하게 분배된 공간 사이에 위치하게 됨. */
    justify-content: space-between;
    /* 컨테이너 내부의 아이템들이 한 줄에 맞지 않을 때 어떻게 처리할지 / 이를 설정하면 컨테이너의 너비를 초과하는 아이템들이 새로운 줄로 이동하게 됨. */
    flex-wrap: wrap;
    margin-top: 35px;

    /* 브라우저 창 최대 너비가 768px이하일 때 margin-top속성을 26px로 설정하라는 의미 */
    @media (max-width: 768px) {
        margin-top: 26px;
    }
`;

const FooterLink = styled.a`
    color: gray;
    font-size: 14px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    /* 현재 선택자를 참조함 즉, FooterLink에 마우스를 올렸을 때 작동되는? 그런거인듯 */
    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;

const FooterDescContainer = styled.div`
    margin-top : 30px;
    
    @media (max-width: 7680px) {
        margin-top: 20px;
    }
`;

const FooterDescRights = styled.h2`
    color: white;
    font-size: 14px;
    text-align: center;
`;