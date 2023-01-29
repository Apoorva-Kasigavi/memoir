import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './context/Context.js';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ContextProvider>
      <App />
    </ContextProvider>
  
);

