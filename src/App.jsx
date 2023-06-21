import Header from "./componentes/Header/Header"
import ItemListContainer from "./componentes/ItemListContainer/itemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (

    <BrowserRouter>

        <Header />
     
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>
   
  )
}

export default App