import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.css';
import App from './App';
import { Gift } from './component/gift.tsx';
import background from './assets/background.jpeg'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Start } from './component/start.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <div>
//       <Gift />
//     </div>
//   </>
// );

root.render(
  <BrowserRouter>
    <App/>
    {/* <Gift /> */}
  </BrowserRouter>
);

