import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import './Cart.css';

export default function Cart({ cart, setCart }) {
    function handleRemove(id) {
        setCart(cart.filter((i) => i.id !== id));
    }

    return (
        <div>
            <h1>Cart</h1>

            <section className="cart-layout">
                <div className="items">
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>

                <OrderSummary cart={cart} />
            </section>
        </div>
    );
}