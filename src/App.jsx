import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//Pages
import Home from './Pages/Home';
import About from "./About";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <About /> */}
    </>
  )
}

export default App
