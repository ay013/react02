import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")
  const [count, setCount] = useState(0)
const col=(color) => {
  const body=document.querySelector("body");
  body.style.backgroundColor=color;
  
}

  return (
    <>
      <div  className='w-full h-screen duration-150 flex justify-center items-center' >
       
    
      <button onClick={()=>{col("blue")}}className='outline-none bg-amber-300 mr-2.5 p-2 rounded-4xl '>hello click me </button>
      <button onClick={()=>{setcolor("red")}} className='bg-red-700  mr-2.5  p-2   rounded-4xl'>red</button>
      <button onClick={()=>{setcolor("blue")}} className='bg-blue-400 mr-2.5  p-2  rounded-4xl'>blue</button>
      <button onClick={()=>{setcolor("green")}} className='bg-green-600 mr-2.5  p-2  rounded-4xl'>green</button>
      </div>
    </>
  )
}

export default App
