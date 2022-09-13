import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormContainer = styled.div`
    background-color: #000;
    height: 600px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px ){
        padding-left: 30px;
        padding-right: 30px;
    }
`;

const Form = styled.form`
    width: 600px;
    padding: 2rem;
    border-radius: .5rem;
    background-color: #FAEBD7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    div{
        width: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media screen and  (max-width: 768px) {
            width: 100%;
        }
    }

    @media screen and (max-width: 786px) {
        flex-direction: column;
        width: 300px;
    }
`;


const Input = styled.input`
    margin: .7rem 0;
    padding: .7rem 0;
    border-radius: .5rem;
    outline: none;
    border: none;
    width: 100%;

    &::placeholder{
        padding: 2rem;
    }
`;

const Message = styled.textarea`
    height: 5rem;
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    resize: none;
`;

const Button = styled.button`
    padding: 1rem 3rem;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
    margin-top: 2rem;
    border-radius: .5rem;

    &:hover{
        background-color: #242424;
        transform: scale(1.04);
        transition: .2s ease;
    }
`;

const Row = styled.div`
    margin-top: 1.2rem;
    width: 100%;
`;

const Result = () => {
    return(
        <p>Your message has been succsesfully sent. i will contact you soon</p>
    );
};

const Contact = (props) => {

    const [result, setResult] = useState(false);

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

  return (
    <FormContainer>
     <Form action="" onSubmit={sendEmail}>
        <div>
            <h2>Say Hello!</h2>
            <Input type="text" name="fullName" placeholder='Full Name' required />
            <Input type="text" name="phone" placeholder='Phone Number' required />
            <Input type="text" name="email" placeholder='Enter Email' required />
        </div>
        <div>
            <Message  name="message" placeholder="Enter Your Message"></Message>
            <Button>SUBMIT</Button>
            <Row>{result ? <Result /> : null}</Row>
        </div>
    </Form>
    </FormContainer>

  );
}

export default Contact