import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #0e2a6c, #9b9bfb);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: -10px;
  margin-top: -10px;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: -80px;
  bottom: 80px;
`;

export const FooterCon = styled.footer`
  width: 100vw;
  height: auto;
  padding: 20px 0;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: #fff;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
`;

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 60vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  padding: 0 20px;

  /* hype4academy's Glass Morphism Style: https://hype4.academy/tools/glassmorphism-generator */
  background: rgba( 0, 0, 70, 0.3 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const QuoteGeneratorTitle = styled.h2`
  font-family: 'Manrope', sans-serif;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 48px;
  text-align: center;
  color: #fff;
  padding: 0px 20px;
  position: relative;
  @media only screen and (max-width: 600px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const QuoteGeneratorSubTitle = styled.p`
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin: 16px 0;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0px 20px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const GenerateQuoteButton = styled.div`
  height: 60px;
  width: 250px;
  border: 2px solid darkgrey;
  border-radius: 20px;

  margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  transform-origin: center;

  /* hype4academy's Glass Morphism Effect */
  background: rgba(0,0,70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(1.5);
  -webkit-backdrop-filter: blur(1.5);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);

  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);

    transform-origin: center;
  }
`;

export const GenerateQuoteButtonText = styled.div`
  color: #fff;
  font-family: 'Manrope', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
`;