import Cart from 'components/Cart/Cart'
import ItemDetail from 'components/ItemDetail/ItemDetail'
import ItemDetailContainer from 'containers/ItemDetailContainer'
import ItemListContainer from 'containers/ItemListContainer'
import { PokemonProvider } from 'context/PokemonContext'

const App = () => {
  return (
    <PokemonProvider>
      <ItemDetail item={{ id: 3, name: 'Squirtle' }} />
      <Cart />
      <ItemListContainer />
      <ItemDetailContainer />
    </PokemonProvider>
  )
}
export default App

//https://github.com/JoseLuisFriedrich/
