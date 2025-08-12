import { Link } from 'react-router'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to PokéMart Online!</p>

            <button className="hero-button">
                <Link to="/shop">
                    <h2>Start Your Trainer Journey!</h2>
                </Link>
            </button>
        </div>
    )
}