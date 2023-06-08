import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElements';
import QuoteGeneratorModal from '@/components/QuoteGenerator';

// Assets
import Clouds1 from '@/assets/cloud-and-thunder.png';
import Clouds2 from '@/assets/cloudy-weather.png';
import { API } from 'aws-amplify';
import { generateAQuote, quotesQueryName } from '@/src/graphql/queries';
import { GraphQLResult } from '@aws-amplify/api-graphql';

// Interface for AppSync <> Lambda JSON response
interface GenerateAQuoteData {
  generateAQuote: {
    statusCode: number;
    headers: { [key: string]: string}; 
    body: string;
  }
}

// Interface for DynamoDB Object
// UpdateQuoteInfoData defines the data type retrieved from DynamoDB
interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

// Type Guard for fetch function (for checking query from DynamoDB)
// Function that checks against types and expected values
function isGraphQLResultForquotesQueryName(response: any): response is GraphQLResult<{
  quotesQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  // Different outputs that can be returned to the data query
  return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
}

export default function Home() {
  // UseState Hook to dynamically change the setNumberOfQuotes from DynamoDB
  // App Sync to get the value to numberOfQuotes from AWS
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator, setOpenGenerator] = useState(false);
  const [processingQuote, setProcessingQuote] = useState(false);
  // Quote Received will be filled with data, thus null
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);

  // Function to fetch DynamoDB object (Quotes Generated)
  const updateQuoteInfo = async () => {
    try {
      // Use API GraphQL method to call app sync data with the query below
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quotesQueryName,
        authMode: "AWS_IAM",
        variables: {
          // As created in DynamoDB
          queryName: "LIVE",
        },
      })

      // Response
      console.log('response', response);
      // setNumberOfQuotes();

      // Create Type Guards
      if (!isGraphQLResultForquotesQueryName(response)) {
        throw new Error('Unexpected response from API.graphql');
      }

      if (!response.data) {
        throw new Error('Response data is undefined');
      }

      // All the types are set to Number to avoid errors
      const receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(receivedNumberOfQuotes);

    } catch (error) {
      console.log('error getting quote data', error)
    }
  }

  // Invoking function with hook, useEffect, for side effects but make sure to unsubscribe to prevent invoking all the time
  useEffect(() => {
    updateQuoteInfo();
  }, []);

  // Functions for Quote Generator Modal
  const handleCloseGenerator = () => {
    setOpenGenerator(false);
    setProcessingQuote(false);
    setQuoteReceived(null);
  }

  const handleOpenGenerator = async (e: React.SyntheticEvent) => {
    // To manage the state without reloading the page
    e.preventDefault();
    setOpenGenerator(true);
    setProcessingQuote(true);

    try {
      // Run Lambda Function
      const runFunction = "runFunction";
      const runFunctionStringified = JSON.stringify(runFunction);
      const response = await API.graphql<GenerateAQuoteData>({
        query: generateAQuote,
        authMode: "AWS_IAM",
        variables: {
          input: runFunctionStringified,
        },
      });
      const responseStringified = JSON.stringify(response);
      const responseReStringified = JSON.stringify(responseStringified);
      const bodyIndex = responseReStringified.indexOf("body=") + 5;
      const bodyAndBase64 = responseReStringified.substring(bodyIndex);
      const bodyArray = bodyAndBase64.split(",");
      const body = bodyArray[0];
      console.log(body);
      setQuoteReceived(body);

      // End State: 
      setProcessingQuote(false);

      // Fetch if any new quotes were generated from counter
      updateQuoteInfo();

      // For the function to terminate at the end
      // setProcessingQuote(false);
      // setTimeout(() => {
      //   setProcessingQuote(false);
      // }, 3000);

    } catch (error) {
      console.log('error generating quote: ', error);
      setProcessingQuote(false);
    }
  }

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
        <QuoteGeneratorModal 
          open={openGenerator}
          close={handleCloseGenerator}
          processingQuote={processingQuote}
          setProcessingQuote={setProcessingQuote}
          quoteReceived={quoteReceived}
          setQuoteReceived={setQuoteReceived}
        />

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Want to be inspired? Get a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton onClick={handleOpenGenerator}>
              <GenerateQuoteButtonText>
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
