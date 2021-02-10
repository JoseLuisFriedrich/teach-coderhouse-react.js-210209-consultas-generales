import getFirestore from 'backend/firebase'
import { useEffect } from 'react'

const ItemListContainer = () => {
  //const { categoryId } useParams()
  const categoryId = 'IT'

  useEffect(() => {
    let query = null

    if (categoryId) {
      query = getFirestore().collection('items').where('categoryId', '==', categoryId)
    } else {
      query = getFirestore().collection('items')
    }

    query.get().then(response => {
      if (response.size === 0) console.log('empty')

      const data = response.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      // data.filter()
      console.table(data)
    })

    //traer de firebase
    // a) si categoryId existe: filtro (usando el filtro de firebase) el listado por categoria
    // b) si categoryId no existe: mostrar todos los productos
  }, []) //dep-> agregar categoryId

  return (
    <section id='ItemListContainer'>
      <h2>ItemListContainer</h2>
    </section>
  )
}

export default ItemListContainer
