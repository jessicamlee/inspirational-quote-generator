import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import Lottie from 'react-lottie-player'

export const ImageBlobCon = styled.div`
  position: relative;
  text-align: center;
  top: 10px;
  transition: 0.3s all ease-in-out;
  width: fit-content;
  margin: 16px auto auto;
  height: 100px;
  z-index: 3;

  &:hover,
  &:focus {
    transform: scale(4.8);
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    @media only screen and (max-width: 600px) {
        transform: scale(2.8);
        z-index: 3;
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    }
    @media only screen and (max-width: 800px) {
        transform: scale(3.8);
        z-index: 3;
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 80px 90px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const DownloadQuoteCardCon = styled.div`
  border: 2px solid darkgrey;
  width: 400px;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  transform: scale(0.7);
  width: 70vw;
  margin: auto;
  &:hover,
  &:focus {
    background: rgba(193, 193, 255, 0.03);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    -webkit-backdrop-filter: blur()(20px);
    backdrop-filter: blur(20px);
  }
`;

export const CenteredLottie = styled(Lottie)`
  width: 250px;
  height: 250px;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  margin-top: -40px;
  pointer-events: none;
`;

export const DownloadQuoteCardConText = styled.div`
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  position: relative;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 20px;
  margin: -20px auto 20px;
  pointer-events: none;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
  }
`;