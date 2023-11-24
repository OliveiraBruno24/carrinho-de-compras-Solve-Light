import './App.css'
import { Route, Routes } from 'react-router-dom'
import ShoppingCart from './pages/ShoppingCart'
import { MyProducts } from './pages/MyProducts'

function App() {

  return (
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
        <Route path="/myProducts" element={<MyProducts />} />
      </Routes>
  )
}

export default App
