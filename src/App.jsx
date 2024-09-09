import { useState } from 'react'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Calculator
      </h1>
      <div>
        Calculator here
      </div>
      <p>
        = Answer here
      </p>
    </div>
  )
}

export default App
