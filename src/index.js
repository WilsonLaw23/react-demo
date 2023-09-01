import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wrapper from './components/LocalContextProvider';
import { BrowserRouter } from 'react-router-dom';
import IntlProviderWrapper from './components/IntlProviderWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Wrapper>
    <IntlProviderWrapper>
      <App />
      </IntlProviderWrapper>
      </Wrapper>
      </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
