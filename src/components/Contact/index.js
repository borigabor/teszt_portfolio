import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import * as IoIcons from 'react-icons/io';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    background-color: #eee;
`;

const ContactWrapper = styled.div`
    display: flex;
    max-width: 1300px;
    padding-right: 50px;
    padding-left: 50px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;



    @media screen and (max-width: 900px) {
        margin: 0 30px;
        align-items: center;
        padding: 0;
    }

`;

const ContactContainer = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    background-color: #fafafa;
    padding: 2rem .5rem;
    border-radius: .5rem;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);

    @media screen and (max-width: 900px) {
        grid-template-areas: 'col1' 'col2';
        width: 100vw;
    }
`;

const Left = styled.div`
    grid-area: col1;
    margin-bottom: 15px;
    padding: 0 15px;
`;

const Right = styled.div`
    grid-area: col2;
    margin-bottom: 15px;
    padding: 0 15px;
`;

const TextContainer = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
    padding-top: 0px;

    p{
        padding: 1rem 0;
    }

    @media screen and (max-width: 900px) {
        text-align: center;
    }
`;

const Form = styled.form`
    max-width: 555px;
    height: 100%;
    padding: 2rem;
`;

const Input = styled.input`
	width: 100%;
	border: 2px solid rgba(0, 0, 0, .3);
	outline: none;
	background-color: rgba(230, 230, 230, 0.6);
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
	margin-bottom: 22px;
	transition: .3s;
    
    &::placeholder{
        font-family: 'Quicksand', sans-serif;
        font-style: italic;
    }
    
    &:focus {
    border: 2px solid rgba(30,85,250,0.47);
    background-color: #fff;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Message = styled(Input)`
    min-height: 150px;
`;

const Row = styled.div`
    margin-top: 1.2rem;
    width: 100%;
`;

const Result = () => {
    return(
        <p>Az üzenet sikeresen elküldve. Hamarosan felveszem önnel a kapcsolatot!</p>
    );
};


const ContactForm = () => {

    const [sendbtn, setSendbtn] = useState(false);
    const [result, setResult] = useState(false);

    const toggle = () => setSendbtn(!sendbtn);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mtm1itr', 'template_fzizbqg', e.target, 'ZnlDHheng0BPsXEGW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true);
      };

      setTimeout(() => {
        setResult(false);
      },5000);

      useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
      

  return (
    <ContactSection>
        <ContactWrapper>
            <h3 data-aos="zoom-in">Kapcsolat</h3>
            <ContactContainer>
                <Left>
                    <TextContainer>
                        <h3>Vedd fel velem a kapcsolatot!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eligendi, beatae laudantium ipsum fugiat iusto nostrum quis itaque nesciunt vel odio quidem blanditiis rem. Error fuga quasi nihil quibusdam voluptate!</p>
                        <p>Telefonszám: 0630 456789</p>
                        <p>E-mail: KissMiska@gmail.com</p>
                    </TextContainer>
                </Left>
                <Right>
                    <Form action="" onSubmit={sendEmail}>
                        <Input type="text" name="fullName" placeholder='Teljes Név' required />
                        <Input type="text" name="phone" placeholder='Telefonszám' required />
                        <Input type="text" name="email" placeholder='Email cím' required />
                        <Message  name="message" placeholder="Üzenet"></Message>
                        <Button onMouseEnter={toggle} onMouseLeave={toggle}>
                            Küldés
                            {sendbtn ? 
                            <IoIcons.IoMdArrowForward /> :
                            <IoIcons.IoIosArrowForward/>         
                        }
                        </Button>
                        <Row>{result ? <Result /> : null}</Row>
                    </Form>
                </Right>
            </ContactContainer>
        </ContactWrapper>
    </ContactSection>
  );
}

export default ContactForm;