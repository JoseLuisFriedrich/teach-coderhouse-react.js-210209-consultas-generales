import { useState } from 'react'
import './ItemCounter.scss'

const ItemCounter = ({ initial, max, onAdd }) => {
  const [counter, setCounter] = useState(1)

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleAdd = () => {
    onAdd(counter)
  }

  return (
    <article id='ItemCounter'>
      {counter}
      <button onClick={handleDecrement}>decrement</button>

      <button onClick={handleIncrement}>increment</button>

      <button onClick={handleAdd}>agregar {counter}</button>
    </article>
  )
}

export default ItemCounter
