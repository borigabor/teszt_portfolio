import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
`;

const PricingWrapper = styled.div`
  max-width: 1300px;
  padding-right: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;



  @media screen and (max-width: 900px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PricingCard = styled.div`
    width: 280px;
    height: 500px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    background-color: #fafafa;
    border-radius: .5rem;
    text-decoration: none;

    &:nth-child(2) {
        margin: 0 24px;
        transform: scale(1.05);

        @media screen and (max-width: 900px) {
            margin: 24px;
        }
    }

    &:hover{
        transform: scale(1.06);
        transition: all .3s ease-out;

        @media screen and (max-width: 900px) {
            transform: none;
        }
    }

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;


  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;


const PricingCardInfo = styled.div`
    height: 500px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #242424;
`;

const Container__Features = styled.ul`
    margin: 16px 0 32px;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Feature = styled.li`
    margin-bottom: 10px;
`;

const Icon = styled.div`
    margin: 24px 0;
`;


const Price = () => {

    useEffect(() => {
        AOS.init({duration: 2000,
        });
    }, [])
    

  return (
    <IconContext.Provider value={{color: '#000', size: 64}}>
        <PricingContainer>
            <PricingWrapper>
                <h3 data-aos="zoom-in">Konzultáció</h3>
                <Container>
                <PricingCard data-aos="fade-left">
                    <PricingCardInfo>
                        <Icon>
                            <FaFire />
                        </Icon>
                        <h3>Starter</h3>
                        <h4>7.000 Ft</h4>
                        <p>per month</p>
                        <Container__Features>
                            <Feature>100 transactions</Feature>
                            <Feature>2% Cash Back</Feature>
                            <Feature>$10,000 Limit</Feature>
                        </Container__Features>
                    </PricingCardInfo>
                </PricingCard>
                <PricingCard data-aos="fade-up">
                    <PricingCardInfo>
                        <Icon>
                        <BsXDiamondFill />
                        </Icon>
                        <h3>Gold</h3>
                        <h4>8.000 Ft</h4>
                        <p>per month</p>
                        <Container__Features>
                            <Feature>100 transactions</Feature>
                            <Feature>2% Cash Back</Feature>
                            <Feature>$10,000 Limit</Feature>
                        </Container__Features>

                    </PricingCardInfo>
                </PricingCard>
                <PricingCard data-aos="fade-right">
                    <PricingCardInfo>
                        <Icon>
                        <GiCrystalize />
                        </Icon>
                        <h3>Diamond</h3>
                        <h4>10.000 Ft</h4>
                        <p>per month</p>
                        <Container__Features>
                            <Feature>100 transactions</Feature>
                            <Feature>2% Cash Back</Feature>
                            <Feature>$10,000 Limit</Feature>
                        </Container__Features>
  
                    </PricingCardInfo>
                </PricingCard>
                </Container>
            </PricingWrapper>
        </PricingContainer>
    </IconContext.Provider>
  );
}

export default Price;