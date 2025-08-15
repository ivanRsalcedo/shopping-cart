import Pikachu from '../assets/pikachu.svg'
import { Outlet, Link } from 'react-router'

export default function AppLayout({ cart, setCart, itemCount }) {
    return (
        <>
            <header>
                <nav className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to="/cart">Cart{itemCount > 0 && ` (${itemCount})`}</Link>
                </nav>
            </header>

            <main>
                <Outlet context={{cart, setCart}} />
                <img src={Pikachu} alt="Pikachu silhouette" className="pikachu-bg" />
            </main>

            <footer>
                <p>made by ivan</p>
            </footer>
        </>
    )
}