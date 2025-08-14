import { Link } from 'react-router'

import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <p>Welcome to PokéMart Online!</p>

            <button className={styles.herobtn}>
                <Link to="/shop">
                    <h2>Start Your Trainer Journey!</h2>
                </Link>
            </button>
        </div>
    )
}