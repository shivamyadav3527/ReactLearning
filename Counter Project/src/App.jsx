import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const incrementor = () => {
    if(counter<20){
      setCounter(counter => counter+1);
      setCounter(counter =>counter+1);
      setCounter(counter =>counter+1);
      setCounter(counter => counter+1);

    }
  };
  const decrementor =() => {  
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count is {counter}</h2>
      <button onClick={incrementor}>Add</button><br/><br/>
      <button onClick={decrementor}>Substract</button>
    </>
  )
}

export default App
