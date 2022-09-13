import styled from 'styled-components';

export const Button = styled.button`
    padding: 1rem 3rem;
    background-color: #242424;
    color: #eee;
    border-radius: .2rem;
    font-size: 18px;
    outline: none;
    border: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
        background-color: #000;
        transition: .3s ease-in-out;
        transform: scale(1.03);
    }
`;