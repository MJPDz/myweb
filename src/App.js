// import { Texto } from "./components/Texto"
// import { Contador } from "./components/Contador"
// import { ListaNombres } from "./components/ListaNombres"
// import { Pokemones } from "./components/Pokemones"
// import { Referencia } from "./components/Referencia"
// import { Estilos } from "./components/Estilos"
// import { NavbarBoots } from "./components/Navbar"
// import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
// import { SpinnerBoots } from "./components/Spinner"
import CrudApp from "./components/crud/CrudApp"

const App = () => {
  return (
    <>
      {/* <Texto name="Mako" apellido="Portugal" edad={22} />
      <hr />
      <ListaNombres />
      <hr /> 
      <Contador />
      <Pokemones /><hr /> 
      <Referencia /> 
      <Estilos />
      <NavbarBoots />
      <SpinnerBoots />*/}

      <CrudApp />
    </>
  )
}

export default App