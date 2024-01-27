import { useState,useEffect } from 'react'
import Timmer  from './Timer'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  

  function showComponent() {
    setShow(!show)
  }
  
 


  return (
    <>
      
      <div >
      {show?<Timmer/>:""}
        <button onClick={showComponent}>Toggle Component</button>
      </div>
    </>
  )
}

export default App
