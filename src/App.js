import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Register from './register/Register';

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <button onClick={()=> setCount((count <= 0)? count = 0 : count -1)}>-</button>
      <span>{count}</span>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <Register/>
    </div>
  );

}

export default App;
