import NavBar from "./componentes/navBar"
import Usuarios from "./componentes/Usuario"
import Cards from "./componentes/cards"
import ItemListContainer from "./componentes/itemListContainer"
import "./App.css"




function App() {


  return (
    <>

    <NavBar/>
    <ItemListContainer mensaje = "Destacados de la Semana"/>



    <Cards/>

    <Usuarios nombre = "Ignacio Pacheco" curso = "ReactJS" edad = {21}/>
    </>
  )
}

export default App
