import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';

import { router } from './constants/routes.tsx';
import client from './lib/apollo/index.ts';

import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </RecoilRoot>
  </StrictMode>
);
