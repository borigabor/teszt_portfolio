import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import {FaEnvelope} from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs';
import {IoLocationSharp} from 'react-icons/io5';

const FooterContainer = styled.div`
background-color: #fff;
padding: 4rem 0 2rem;
box-shadow: 0px -4px 15px #999;
`;

const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const FooterCards = styled.div`
    padding: 1rem 0;
    max-width: 1300px;
    padding-right: 50px;
    padding-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
        margin: 0 30px;
        padding-left: 10px;
        padding-right: 10px;
        flex-direction: column;
    }
`;

const FooterCard = styled.div`
    padding: 2rem;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;

    &:nth-child(2) {
        margin: 0 24px;

        @media screen and (max-width: 900px) {
            margin: 24px;
        }
    }

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`;

const Icon = styled.div`
    margin-bottom: 1rem;
    height: 3rem;
    width: 3rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;
`;





const Footer = () => {
  return (
    <IconContext.Provider value={{color: '#000', size: 18}}>
    <FooterContainer>
        <FooterWrapper>
        <p>Popovics Anna</p>
        </FooterWrapper>
        <FooterCards>
            <FooterCard>
                <Icon>
                <FaEnvelope />
                </Icon>
                <h4>Email</h4>
                <p>KissValaki@gmail.com</p>
            </FooterCard>
            <FooterCard>
                <Icon>
                <BsTelephoneFill />
                </Icon>
                <h4>Email</h4>
                <p>KissValaki@gmail.com</p>
            </FooterCard>
            <FooterCard>
                <Icon>
                <IoLocationSharp />
                </Icon>
                <h4>Email</h4>
                <p>KissValaki@gmail.com</p>
            </FooterCard>
        </FooterCards>
    </FooterContainer>
    </IconContext.Provider>
  );
}

export default Footer;