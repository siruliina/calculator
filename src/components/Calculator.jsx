import { useState } from 'react'
import '../css/Calculator.css'

const Calculator = () => {

    const [equation, setEquation] = useState('')
    const [answer, setAnswer] = useState('')
    const [isCalculated, setIsCalculated] = useState(false)

    const calculate = () => {
        try {
            // Calculates the equation and gives the result.
            const result = eval(equation)
            setAnswer(result)
            setIsCalculated(true)
            console.log(result)
        } catch (error) {
            // If the equation has faults, an error is thrown.
            setAnswer('Error')
            setIsCalculated(false)
        }
    }

    const handleClick = (x) => {
        if (isCalculated) {
            setEquation('' + x)
            setIsCalculated(false)
        } else {
            setEquation(equation + x)
        }
    }
    
    const resetParameters = () => {
        setEquation('')
        setAnswer('')
    }

    return (
        <div>
            <p>{equation} {answer != '' ? <>= {answer}</> : <></>}</p>
            <div className='grid-container'>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <div></div>
                <button onClick={() => handleClick('0')}>0</button>
                <div></div>
            </div>
            <div className='grid-container'>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('(')}>(</button>
                    <button onClick={() => handleClick(')')}>)</button>
                <button onClick={calculate}>=</button>
                <button onClick={resetParameters}>C</button>
            </div>
        </div>
    )
}

export default Calculator