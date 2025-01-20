import { useState } from 'react'
import Card from './components/card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500'>Hakuna Matata</h1>
      <Card username='shivam' hakuna/>
      <Card/>

     
      
    </>
  )
}

export default App
