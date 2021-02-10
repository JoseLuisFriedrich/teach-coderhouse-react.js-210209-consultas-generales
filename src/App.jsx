import Cart from 'components/Cart/Cart'
import ItemDetail from 'components/ItemDetail/ItemDetail'
import { PokemonProvider } from 'context/PokemonContext'

const App = () => {
  return (
    <PokemonProvider>
      <ItemDetail item={{ id: 3, name: 'Squirtle' }} />
      <Cart />

      {/* <ItemListContainer />
     <ItemDetailContainer />
     <Cart /> */}
    </PokemonProvider>
  )
}
export default App

//https://github.com/JoseLuisFriedrich/
