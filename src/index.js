import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './components/context/ProductContext';
import { FilterContextProvider } from './components/context/FilterContext';
import { CartProvider } from './components/context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={"dev-q88eufxsdfx21lzd.us.auth0.com"}
    clientId="OaD3mFDf5qD0Myl9oiJdiHPbCzDv8ute"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);


