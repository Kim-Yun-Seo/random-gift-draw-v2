import './App.css';
import { Route, Routes } from "react-router-dom";
import { Start } from './component/start.tsx';
import { Rule } from './component/rule.tsx';
import { Gift } from './component/gift.tsx';
import { Steal } from './component/steal.tsx';
import { Finish } from './component/finish.tsx';

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/steal" element={<Steal />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
