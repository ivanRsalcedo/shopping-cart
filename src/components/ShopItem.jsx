import { useState } from 'react';
import styles from './ShopItem.module.css'

export default function ShopItem(props) {

    const [quantity, setQuantity] = useState(1);
    const total = props.price * quantity;

    const inc = () => setQuantity(q => q + 1);
    const dec = () => setQuantity(q => Math.max(1, q - 1));

    function handleQtyChange(e) {
        const n = Number(e.target.value);
        setQuantity(n > 0 ? n : 1);
    }

    return (
        <div className={styles.card}>
            <img className='pixel-art' src={props.image} alt={`${props.name} product image`} />
            <div className={styles.details}>
                <h2 className={styles.name}>{props.name}</h2>
                <span className={styles.category}>{props.category}</span>
                <p className={styles.description}>{props.description}</p>
                <hr aria-hidden="true" />
                <data className={styles.price} value={total}>₽ {total}</data>
                <div className={styles.btnrow}>
                    <div className={styles.quantity}>
                        <button onClick={dec}>-</button>
                        <input type="number" min={1} step={1} value={quantity} onChange={handleQtyChange} />
                        <button onClick={inc}>+</button>
                    </div>
                    <button className={styles.btncart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}