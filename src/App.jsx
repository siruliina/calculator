import { useState } from 'react'
import './css/App.css'

import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Calculator
      </h1>
      <Calculator />
    </div>
  )
}

export default App
