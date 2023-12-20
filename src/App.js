import logo from './logo.svg';
import './App.css';
import json from './test.json'
import { ref, useState } from 'react';

function App() {
  const info = useState(
    [
      {
        "name": "kim",
        "canGet": ["c", "d", "e", "f" ],
        "gift": ["a", "b"]
      },
      {
        "name": "lee",
        "canGet": ["a", "b", "e", "f" ],
        "gift": ["a", "b"]
      },
      {
        "name": "yun",
        "canGet": ["a", "b", "c", "d" ],
        "gift": ["a", "b"]
      }
    ]
  )
  console.log('info =' , info)
  return (
    <div>
      kk
    </div>
  );
}

export default App;
