import logo from './logo.svg';
import './App.css';
import json from './test.json'
import { ref, useState } from 'react';
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
import { Start } from './component/start.tsx';
import { Rule } from './component/rule.tsx';
import { Gift } from './component/gift.tsx';

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/rule" element={<Rule />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
