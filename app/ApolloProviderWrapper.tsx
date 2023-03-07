'use client';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './ApolloClient';

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}