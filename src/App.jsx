import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>

      <footer>
        <p>made by ivan</p>
      </footer>
    </BrowserRouter>
  )
}

export default App