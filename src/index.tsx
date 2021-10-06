import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
const Client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={Client}>
     <App />
  </QueryClientProvider>
, document.getElementById('root'));
