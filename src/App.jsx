import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import AppLayout from './components/AppLayout'

import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([]);
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout cart={cart} setCart={setCart} itemCount={itemCount} />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App