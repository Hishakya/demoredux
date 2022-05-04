import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Login from './component/login';
import Profile from './component/profile';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

const store = configureStore({
  redux:{}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
  <Provider store={store} >

  <App />

  </Provider>
  </>
   
  
);

//<Profile/>
//<Login/> 
