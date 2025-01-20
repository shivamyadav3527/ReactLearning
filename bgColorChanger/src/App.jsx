import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  const changeColor = (btn) => setColor(btn.target.innerHTML);
  

  return (
    <div className='w-full h-screen duration-150' style= {{backgroundColor: color}}>
      <div className='top-2/3 left-1/3 fixed flex justify-center gap-1 bg-white rounded-xl py-2 px-2'>
        <button onClick= {changeColor} className='bg-green-500 px-1 py-1 rounded-xl w-14'>Green</button><br /><br />
        <button onClick= {changeColor} className= 'bg-red-600 px-1 py-1 rounded-xl w-14' >Red</button><br /><br />
        <button onClick= {changeColor} className='bg-orange-600 px-1 py-1 rounded-xl w-15'>Orange</button><br /><br />
        <button onClick= {changeColor} className='bg-purple-600 px-1 py-1 rounded-xl w-14'>Purple</button><br /><br />
        <button onClick= {changeColor} className='bg-yellow-400 px-1 py-1 rounded-xl'>Yellow</button><br /><br />
        <button onClick= {changeColor} className='bg-blue-600 px-1 py-1 rounded-xl w-14'>Blue</button><br />
      </div>
    </div>
  )
}

export default App
