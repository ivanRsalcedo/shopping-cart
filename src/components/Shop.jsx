import ShopItem from "./ShopItem"

export default function Shop() {
    return (
        <div>
            <h1>Shop</h1>
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