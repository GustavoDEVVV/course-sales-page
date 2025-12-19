import { useState } from 'react'
import './App.css'
import {SectionPrincipal} from './components/SectionPrincipal/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SectionPrincipal />
    </div>
  )
}

export default App
