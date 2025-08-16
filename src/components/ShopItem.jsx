import { useState } from 'react';
import styles from './ShopItem.module.css'

export default function ShopItem({ id, name, price, category, description, image, addToCart }) {

    const [quantity, setQuantity] = useState(1);
    const total = price * quantity;

    const inc = () => setQuantity(q => q + 1);
    const dec = () => setQuantity(q => Math.max(1, q - 1));

    function handleQtyChange(e) {
        const n = Number(e.target.value);
        setQuantity(n > 0 ? n : 1);
    }

    return (
        <div className={`${styles.shopitem} card`}>
            <img className='pixel-art' src={image} alt={`${name} product image`} />
            <div className={styles.details}>
                <h2 className={styles.name}>{name}</h2>
                <span className={`tag ${styles.category}`}>{category}</span>
                <p className={styles.description}>{description}</p>
                <hr aria-hidden="true" />
                <data className={styles.price} value={total}>₽ {total}</data>
                <div className={styles.btnrow}>
                    <div className={styles.quantity}>
                        <button onClick={dec}>-</button>
                        <input type="number" min={1} step={1} value={quantity} onChange={handleQtyChange} />
                        <button onClick={inc}>+</button>
                    </div>
                    <button className={styles.btncart} onClick={() => {
                        addToCart({ id, name, price, image, quantity });
                        setQuantity(1);
                    }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}