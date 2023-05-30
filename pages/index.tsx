import React, { useState } from 'react';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElements';

// Assets
import Clouds1 from '@/assets/cloud-and-thunder.png';
import Clouds2 from '@/assets/cloudy-weather.png';

export default function Home() {
  // UseState Hook to save the value to numberOfQuotes
  // Set the type as either "Number" or "null"
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>

        {/* Quote Generator Modal: Pop-up to call our script*/}
        {/* <QuoteGeneratorModal 
        /> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Want to be inspired? Get a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Get your Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="Cloud with thunderbolt 3D graphic"
        />

        <BackgroundImage2 
          src={Clouds2}
          height="230"
          alt="Partly cloudy 3D graphic with sun behind cloud"
        />

        {/* Footer */}
        <FooterCon>
          <>
            {/* For counting the number of quotes generated in the back-end */}
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with 💛 by <FooterLink 
              href="https://jessicamlee.dev" 
              target="_blank" 
              // Security Purpose: Helps with legacy browsers regarding web vulnerabilities
              rel="noopener noreferrer"
              > Jessica Lee </FooterLink>
          </>
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}
