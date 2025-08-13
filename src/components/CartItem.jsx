import styles from './CartItem.module.css';

export default function CartItem({ id, name, price, image, quantity, onRemove }) {
    
    const totalPrice = price * quantity;
    
    return (
        <div className={styles.card}>
            <img className='pixel-art' src={image} alt={`${name} product image`} />

            <div className={styles.details}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.price}>
                    ₽ {totalPrice}
                    {quantity > 1 && (
                        <span className={styles.qtycalc}>
                            (₽ {price} x {quantity})
                        </span>
                    )}
                </p>

                <div className={styles.btnrow}>
                    <span className='tag'>Qty: {quantity}</span>

                    <button className={styles.btnremove} onClick={() => onRemove(id)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}