import React, { useEffect, useRef} from 'react';
import styled from 'styled-components';
import background_img from '../../../images/07.jpeg';



import { TweenMax, Power3, Expo} from 'gsap';
import Navbar from '../../Navbar';


const HeroContainer = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
 
`;

const Column = styled.div`
    width: 50%;
    height: 100%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const Left = styled(Column)`
    position: relative;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(${background_img});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    padding: 20px;
    height: 100vh;
`;

const Right = styled(Column)`
	display: flex;
	padding: 120px 30px;
	flex-direction: column;
	align-items: center;
    text-align: center;
`;

const Text = styled.div`
    margin: 2rem 0;

    p{
        padding: 1rem 0;
    }
`;

const Header = styled.div`
    color: #a77a3f;
    text-transform: uppercase;
    font-size: 30px;

    @media screen and (max-width: 900px) {
        font-size: 20px;
        padding: 80px 0;
    }

    h1{
        position: relative;
    }
`;

const Ml12 = styled.h1`
    display: inline-block;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 5px;
`;



const Hero = () => {

let leftAnime = useRef(null);
let textAnime = useRef(null);
let description = useRef(null);
let smooth = useRef(null);

    useEffect(() => {

        TweenMax.from(leftAnime, { duration: 3,
            left: '-50%',
            ease: Power3.easeOut,
            delay: 1.5,
        });

        TweenMax.from(textAnime,  3, {
            left: "-100%",
            ease: Power3.easeOut,
            delay: 1.5,
        });

        TweenMax.from(textAnime,  5, {
            y: '60',
            opacity: 0,
            ease: Power3.easeOut,
            delay: .2,
        });

        TweenMax.from(description, 1.5, {
            y: '60',
            opacity: 0,
            ease: Power3.easeOut,
            delay: 3,
        });

    }, []);
    

  return (
    <>
    <HeroContainer>
            <Left ref={el => leftAnime = el}>
                <Header>
                    <p>Boundary supply /</p>
                    <p>
                        Better then brand new second hand clothing  /focus by sick apparel everyday,
                    </p>
                    <p>home of (23-29)</p>
                </Header>
                </Left>

        
            <Right>
            <Header>
                    <Ml12 ref={el => textAnime = el} >
                        Üdvözöllek a Weboldalon!
                        </Ml12>
                </Header>
            <Text ref={el => description = el}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum similique maxime doloremque corporis ipsa nisi sunt sit, molestiae ducimus corrupti maiores, labore tempora dolores repellat! Quos quasi recusandae aspernatur.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fugit iste distinctio obcaecati commodi ex natus? Porro rem, modi cupiditate tenetur amet vitae, ex ad dolore at eligendi sequi animi, nam iusto quos itaque voluptatibus inventore possimus accusantium cumque ea?</p>
                </Text>
                </Right>

    </HeroContainer>
    </>
  );
}

export default Hero;