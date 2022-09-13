import React from 'react';
import styled from 'styled-components';
import { navData } from '../Navbar/data';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DropDownContainer = styled.div`
    position: fixed;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    left: 0;
    height: 100%;
    width: 100vw;
    display: grid;
    align-items: center;
    background-color: #FAEBD7;
    z-index: 999;
    transition: .3s ease-in-out;
`;

const MobileIcon = styled.div`
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    font-size: 2.5rem;
`;

const CloseIcon = styled(FaTimes)`
    color: #000;
`;

const DropDownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(3, 60px);
    }
`;

const NavLinks = styled(Link)`
    text-decoration: none;
    color: #242424;
    font-size: 1.5rem;

    &:hover{
        transform: scale(1.07);
        transition: .3s ease;
    }
`;

const DropwDownMenu = ({isOpen, toggle}) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
        <MobileIcon onClick={toggle}>
            <CloseIcon />
        </MobileIcon>
        <DropDownMenu>
            {navData.map((e, index) => (
                <NavLinks to={e.path} key={index}>
                    {e.title}
                </NavLinks>
            ))}
        </DropDownMenu>
    </DropDownContainer>
  );
}

export default DropwDownMenu;