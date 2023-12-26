import logo from './logo.svg';
import './App.css';
import json from './test.json'
import { ref, useState } from 'react';
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
import { Start } from './component/start.tsx';

import { Gift } from './component/gift.tsx';

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/gift" element={<Gift />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
