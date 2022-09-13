import React, {useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Hero from './components/Contact/Hero/Hero';
import Navbar from './components/Navbar';
import DropwDownMenu from './components/DropDownMenu.js';
import Price from './components/Price';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
    <Navbar  toggle={toggle}/>
    <DropwDownMenu isOpen={isOpen} toggle={toggle}/>
    <Hero />
    <Price />
    <ContactForm />
  
    </BrowserRouter>
  );
}

export default App;
