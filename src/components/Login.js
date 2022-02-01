import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" alt="" />
        <Signup>GET THE DISNEY BUNDLE</Signup>
        <Description>
          18+ only. Includes Hulu (ad-supported) or Hulu (No Ads) plan. Access
          content from each service separately, and select ESPN+ content via
          Hulu. Location data required to watch certain content. Offer valid for
          eligible subscribers only. Subject to Disney+ and ESPN+ Subscriber
          Agreement.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" alt="" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoOne = styled.img`
  width: 90%;
  margin-bottom: 12px;
`;
const LogoTwo = styled.img`
  width: 90%;
  margin-top: 12px;
`;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1.5px;
  margin-top: 12px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.2px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  /* line-height: 1.5px; */
`;
