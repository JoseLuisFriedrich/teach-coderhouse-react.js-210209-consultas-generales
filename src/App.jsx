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



// 00:00 00:10 ✔️ Relación entre componentes / estructura de carpetas
// 00:10 00:28 ✔️ Firebase get todos los registros / por categoría -> where / por id -> doc(id)
// 00:28 00:40 ✔️ Callback por props onAdd ItemCount
// 00:40 00:50 ✔️ Callback por props onFormValidated UserForm / UserForm
// 00:50 01:15 ✔️ Añadir / Eliminar datos de array / manejar objetos complejos
// 01:15 01:40 ✔️ PokemonContext
// 01:40 01:54 ✔️ Consulta proyecto de alumno (faltaba return en funciones, consultar mal propiedad de objeto)
