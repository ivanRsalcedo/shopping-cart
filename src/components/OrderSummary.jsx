export default function OrderSummary({ cart }) {
    const FREE_SHIPPING_THRESHOLD = 2500;
    const TAX_RATE = 0.05;

    const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const tax = subtotal * TAX_RATE;
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 4.99;
    const total = subtotal + tax + shipping;

    const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

    return (
        <section className="summary">
            <h2>Order Summary</h2>

            <div className="row">
                <span>Subtotal:</span>
                <span>₽ {subtotal.toFixed(2)}</span>
            </div>
            <div className="row">
                <span>Tax:</span>
                <span>₽ {tax.toFixed(2)}</span>
            </div>
            <div className="row">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `₽ ${shipping}`}</span>
            </div>

            <div className="totalRow">
                <span>Total:</span>
                <span>₽ {total.toFixed(2)}</span>
            </div>

            <div className="freeShip">
                {remaining > 0
                    ? <>Spend ₽ {remaining.toFixed(2)} more for <strong>Free Snorlax Shipping</strong>!</>
                    : <>You unlocked <strong>Free Snorlax Shipping</strong>!</>}
                <div className="freeShipBar">
                    <div className="freeShipFill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <button
                onClick={() => window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0')} className="checkoutBtn">Checkout</button>
        </section>
    );
}