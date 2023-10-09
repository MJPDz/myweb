import React, { useState } from 'react'

const CrudForm = ({ addEquipo }) => {

  const [formData, setFormData] = useState({
    equipo: '',
    pais: '',
    id: null
  })

  const handleSubmit = (e) => {
    e.preventDefault() //Evita que se recargue la página
    
    if(formData.equipo !== '' && formData.pais !== ''){
      formData.id = Math.floor(Math.random()*100)
      addEquipo(formData)
      setFormData({
        equipo: "",
        pais: "",
        id: null
      })
    } else {
      alert("Por favor, agrega un equipo y país.")
    }
  }

  const handleChange =(e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form className='m-3' onSubmit={handleSubmit}>
        <label htmlFor="equipo">Equipo:</label>
        <input type="text" name="equipo" onChange={handleChange} value={formData.equipo}/>
        <label htmlFor="pais">Pais:</label>
        <input type="text" name='pais' onChange={handleChange} value={formData.pais} />
        <br />
        <input type="submit" value="Agregar" className='btn btn-success mt-3 mx-2' />
        <input type="reset" value="Cancelar" className='btn btn-danger mt-3 mx-2' />
      </form>
    </>
  )
}

export default CrudForm