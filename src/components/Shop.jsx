import './Shop.css'

import ShopItem from "./ShopItem"

import getItemByName from "../api/pokeapi";
import { useEffect, useState } from "react";

const presetItemList = ['poke-ball', 'great-ball', 'ultra-ball', 'potion', 'super-potion', 'x-attack', 'x-defense', 'moon-stone', 'thunder-stone', 'quick-claw', 'amulet-coin', 'lucky-egg'];

export default function Shop() {
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
                    />
                )}
            </section>
        </div>
    )
}