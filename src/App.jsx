import Header from "./componentes/Header/Header"
import ItemListContainer from "./componentes/ItemListContainer/itemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Carts from "./componentes/Carts/Carts"





function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Carts" element={<Carts />}/>
        </Routes>

      </BrowserRouter>
    </CartProvider>

  )
}

export default App