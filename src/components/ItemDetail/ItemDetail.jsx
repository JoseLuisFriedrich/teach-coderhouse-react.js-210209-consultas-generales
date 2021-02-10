import ItemCounter from 'components/ItemCounter/ItemCounter'
import usePokemonContext from 'context/PokemonContext'
import { useState } from 'react'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {
  const [counter, setCounter] = useState(0)

  const { addPokemon, delPokemon } = usePokemonContext()

  const handleAdd1 = () => {
    addPokemon({ id: 1, name: 'Charizard' }, 1)
  }

  const handleAdd2 = () => {
    addPokemon(item, 1)
  }

  const handleDelete = () => {
    delPokemon(2)
  }

  //habemus product: item
  //habemus quantity:

  //se pasan funciones a hijos si quiere "subir" un valor del hijo al padre
  const handleCounter = counter => {
    setCounter(counter)
    alert('soy item detail con ' + counter)
  }

  return (
    <article id='ItemDetail'>
      <h2>ItemDetail</h2>

      <button onClick={handleAdd1}>agregar poke1</button>
      <button onClick={handleAdd2}>agregar poke2</button>
      <button onClick={handleDelete}>del poke2</button>

      <ItemCounter initial={1} max={5} onAdd={handleCounter} />

      <hr />
    </article>
  )
}

export default ItemDetail
