import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// AWS Imports
import { Amplify } from 'aws-amplify';
// Call our services added to the stack to use for the app
import awsExports from '../src/aws-exports';

// Configures Amplify to execute the entire application
Amplify.configure({ ...awsExports, srr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
