import ShopItem from "./ShopItem"
import { useState } from "react";

export default function Shop() {

    const [catalogue, setCatalogue] = useState([]);

    return (
        <div>
            <h1>Shop</h1>
            <section className='catalogue'>
                {catalogue.map((item) =>
                    <ShopItem
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                        image={item.image}
                    />
                )}
            </section>
            <ShopItem
                id={4}
                name="Poké Ball"
                price={200}
                category="Standard Balls"
                description="Used in battle: Attempts to catch a wild Pokémon."
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            />
        </div>
    )
}