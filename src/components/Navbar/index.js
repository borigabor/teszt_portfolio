import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navData } from './data';
import { TweenMax, Power3 } from 'gsap';

const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    top: 0;
    height: 60px;
    padding: 0 30px;
    background: ${({navbar}) => (navbar ? 'rgba(255,255,255, 0.6);' : 'transparent')};
    box-shadow: ${({navbar}) => (navbar ? '0px 15px 10px -15px #111' : 'none')};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 999;
    transition: .3s ease;

    @media screen and (max-width: 768px) {
        position: absolute;
    }
`;

const MobileMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 25%);
    cursor: pointer;
    font-size: 2rem;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const MobileIcon = styled(FaBars)`
        color: ${({navbar}) => (navbar ? '#000' : '#fff')};
`; 

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: #242424;
    padding: 0 1rem;
    font-size: 1.2rem;

`;


const Navbar = ({toggle}) => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 60) {
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    let navAnime = useRef(null);

    useEffect(() => {
        
        TweenMax.from(navAnime, 3, {
            y: '-60',
            opacity: 0,
            ease: Power3.easeOut,
            delay: 3,
        });

    }, []);
    

  return (
    <Nav navbar={navbar}>
        <MobileMenu>
            <MobileIcon navbar={navbar} onClick={toggle}/>
        </MobileMenu>
        <NavMenu  ref={el => navAnime = el}>
            {navData.map((e, index) => (
                <NavLinks to={e.path} key={index}>
                    {e.title}
                </NavLinks>
            ))}
        </NavMenu>
    </Nav>
  );
}

export default Navbar;