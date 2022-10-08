import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/user.context';
import { ArticleProvider } from './context/article.context';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <UserProvider>
    <ArticleProvider>
        <App />

    </ArticleProvider>


  </UserProvider>
   
  </BrowserRouter>
);

