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

// App
//    NavBar
//       CartWidget (mostrar la cantidad de items en carrito)

//    ItemListContainer (buscamos datos (array) -> promesa/firebase)
//       ItemList
//            Item

//    ItemDetailContainer (buscamos dato (objetos) -> promesa  / firebase)
//        ItemDetail (producto)
//            ItemCount (cantidad ej12)
//              catn12

//    Cart
