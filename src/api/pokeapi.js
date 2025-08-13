// https://pokeapi.co/api/v2/item/<item-name>

export default async function getItemByName(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/item/${name}`);
    if (!res.ok) {
        throw new Error(`API error ${res.status} on id ${name}`)
    }
    const data = await res.json();
    return abridge(data);
}

function abridge(raw) {
    return {
        id: raw.id,
        name: raw.names[7].name,
        price: raw.cost,
        category: raw.category.name,
        description: raw.flavor_text_entries[2].text,
        image: raw.sprites.default,
    }
}

getItemByName('poke-ball');