import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CreateProducts from "./pages/CreateProducts"
import ProductList from "./pages/ProductsList"
import "./components/styles.css"

import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ProductsList" element={<ProductList />}></Route>
          <Route path="/CreateProducts" element={<CreateProducts />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App