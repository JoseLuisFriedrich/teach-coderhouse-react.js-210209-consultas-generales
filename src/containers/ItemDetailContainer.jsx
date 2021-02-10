import getFirestore from 'backend/firebase'
import ItemDetail from 'components/ItemDetail/ItemDetail'
import React, { useEffect, useState } from 'react'

const ItemDetailContainer = () => {
  // Buscar un producto {}, usando el productId que viene de useParams
  // const {itemId} = useParams()
  const itemId = '0aw6kVLdkFK0cPtpeIgj'
  const [item, setItem] = useState({})

  useEffect(() => {
    //código firebase, usen el filtro de firebase, no usen filter
    //filtro id
    const query = getFirestore().collection('items').doc(itemId)

    query.get().then(response => {
      if (!response.exists) console.log('empty')

      const data = { ...response.data(), id: response.id }
      console.table('itemdetailcontainer', data)
      setItem(data)
    })
  }, [])

  return (
    <section id='ItemDetailContainer'>
      <ItemDetail item={{ id: 2, name: 'Squirtle' }} /> {/* item={item} */}
    </section>
  )
}

export default ItemDetailContainer
