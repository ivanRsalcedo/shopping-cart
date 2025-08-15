import './Shop.css'

import ShopItem from "./ShopItem"

import getItemByName from "../api/pokeapi";
import { useEffect, useState } from "react";
import { useOutletContext } from 'react-router';

const presetItemList = ['poke-ball', 'great-ball', 'ultra-ball', 'potion', 'super-potion', 'x-attack', 'x-defense', 'moon-stone', 'thunder-stone', 'quick-claw', 'amulet-coin', 'lucky-egg'];

export default function Shop() {
    const {cart, setCart} = useOutletContext();
    const [catalogue, setCatalogue] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const items = await Promise.all(presetItemList.map((name) => getItemByName(name)));
                setCatalogue(items);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            <section className='catalogue'>
                {catalogue.map((item) =>
                    <ShopItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                        image={item.image}
                        addToCart={(newItem) => {
                            setCart((previousCart) => {
                                // find existing item if there's
                                const search = previousCart.findIndex((i) => i.id === newItem.id);

                                // if there's not just add
                                if (search === -1) return [...previousCart, newItem];

                                // else if there is find existing item and make sure to add to it's quantity instead
                                const updatedCart = [...previousCart];
                                const existingItem = updatedCart[search];

                                updatedCart[search] = {...existingItem, quantity: existingItem.quantity + newItem.quantity };
                                return updatedCart;
                            });
                        }}
                    />
                )}
            </section>
        </div>
    )
}