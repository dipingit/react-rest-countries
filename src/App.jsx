import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <h2></h2>
      <Countries></Countries>
      
    </div>
  )
}

export default App
