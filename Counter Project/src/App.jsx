import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const incrementor = () => {
    if(counter<20){
      counter= counter+1;
      setCounter(counter);
    }
  };
  const decrementor =() => {  
    if(counter>0){
      counter = counter -1;
      setCounter(counter);
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
