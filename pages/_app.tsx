import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { client } from '../apolloClient';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
