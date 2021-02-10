import UserForm from 'components/UserForm/UserForm'
import usePokemonContext from 'context/PokemonContext'
import './Cart.scss'

const Cart = () => {
  //const {test} = useContext(PokemonContext)
  const { pokemons } = usePokemonContext()

  //traerse los items del carrito que estan en el contexto
  //map para mostrar los items del carrito
  //inCart, deleteItem,
  //

  // items del carrito,
  // createOrder {buyer {name, email, sarasa}, items [{id:1, name:'sarasa'}, total]}

  const handleUser = user => {
    //setUser(user)
  }

  return (
    <article id='Cart'>
      {pokemons.map((p, idx) => (
        <h1 key={idx}>{p.pokemon.name}</h1>
      ))}

      <UserForm onValidateUser={handleUser} />
    </article>
  )
}

export default Cart
