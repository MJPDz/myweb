import "./Estilos.css"
import misEstilos from "./Estilos.module.css"

export const Estilos = () => {

  const estilos = {
    backgroundColor: '#124578',
    color: 'white',
    padding: 5
  }

  return (
    <>
      <h1>Estilos...</h1>

      <h3 style={{ backgroundColor: 'red', padding: 5}}>Estilos dentro de la misma linea</h3>

      <h3 style={estilos}>Estilos con variable</h3>

      <h3 className="succes">Estilos en hoja externa</h3>

      <h3 className={misEstilos.error}>Otro texto pipipi</h3>
    </>
  )
}