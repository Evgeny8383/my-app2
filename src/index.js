import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MostPop from './mostPop';
import Others from './others';
import Gallery from './gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';


ReactDOM.render(
  <BrowserRouter>
         <Routes>
       
          <Route path="/" element={<App />}>
          <Route index element={<Main/>}/>  
          <Route path = "/mostPop" element={<MostPop />}/>
          <Route path = "/others" element={<Others/>}/>
          <Route path = "/gallery" element={<Gallery/>}/>
          </Route >

         





         </Routes>
      </BrowserRouter>,
 
  document.getElementById('root')
);


