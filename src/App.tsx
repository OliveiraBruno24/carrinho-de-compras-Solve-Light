import './App.css'
import { Route, Routes } from 'react-router-dom'
import ShoppingCart from './pages/ShoppingCart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
      </Routes>
      
    </>
  )
}

export default App
