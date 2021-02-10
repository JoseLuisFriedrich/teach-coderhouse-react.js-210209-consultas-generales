import Cart from 'components/Cart/Cart'
import ItemDetail from 'components/ItemDetail/ItemDetail'
import ItemDetailContainer from 'containers/ItemDetailContainer'
import ItemListContainer from 'containers/ItemListContainer'
import { PokemonProvider } from 'context/PokemonContext'

const App = () => {
  return (
    <PokemonProvider>
      {/* <ItemDetail item={{ id: 3, name: 'Squirtle' }} /> */}
      <Cart />
      <ItemListContainer />
      <ItemDetailContainer />
    </PokemonProvider>
  )
}
export default App

// https://github.com/JoseLuisFriedrich/

// 00:00 ✔️ Relación entre componentes / estructura de carpetas
// 00:10 ✔️ Firebase get todos los registros / por categoría -> where / por id -> doc(id)
// 00:28 ✔️ Callback por props onAdd ItemCount
// 00:40 ✔️ Callback por props onFormValidated UserForm / UserForm
// 00:50 ✔️ Añadir / Eliminar datos de array / manejar objetos complejos
// 01:15 ✔️ PokemonContext
// 01:40 ✔️ Consulta proyecto de alumno (faltaba return en funciones, consultar mal propiedad de objeto)

// App
//    NavBar
//       CartWidget (mostrar la cantidad de items en carrito)

//    ItemListContainer (buscamos datos (array) -> promesa/firebase)
//       ItemList
//            Item

//    ItemDetailContainer (buscamos dato (objetos) -> promesa  / firebase)
//        ItemDetail (producto)
//            ItemCount (cantidad ej12 subir a itemcount)

//    Cart
