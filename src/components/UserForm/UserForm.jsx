import './UserForm.scss'

const UserForm = ({ onValidateUser }) => {
  //state uesr
  //en un state (o 3) {name: 'pepe', mail:'@', phone: '+54911'}

  const handleInputChange = e => {
    //validar
    console.log(e.target.name, e.target.value)

    //si está validado? setUser({name: 'pepe', mail:'@', phone: '+54911'})
    //onValidateUser({name: 'pepe', mail:'@', phone: '+54911'})
  }

  return (
    <article id='UserForm'>
      <input onInput={handleInputChange} type='text' name='name' id='' />
      <input onInput={handleInputChange} type='text' name='mail1' id='' />
      <input onInput={handleInputChange} type='text' name='mail2' id='' />
      <input onInput={handleInputChange} type='text' name='phone' id='' />
    </article>
  )
}

export default UserForm
