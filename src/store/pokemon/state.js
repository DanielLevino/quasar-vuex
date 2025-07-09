export default function () {
    return {
        pokemons: [],
        pokemonsColorTypes: [
            {type: 'grass', color: "#3e9709"},
            {type: 'fire', color: "#f67f0b"},
            {type: 'water', color: "#0a7abc"},
            {type: 'normal', color: "#ccc9aa"},
            {type: 'flying', color: "#5eb9b2"},
            {type: 'bug', color: "#bddd6e"},
            {type: 'poison', color: "#a819d7"},
            {type: 'electric', color: "#fffa24"},
            {type: 'ground', color: "#e1d158"},
            {type: 'fighting', color: "#e81319"},
            {type: 'psychic', color: "#ec0e63"},
            {type: 'fairy', color: "#ffa0c2"},
            {type: 'ghost', color: "#8e55a4"},
            {type: 'rock', color: "#776a3e"},
            {type: 'ice', color: "#1995a1"},
            {type: 'dragon', color: "#8a55fd"}
        ],
        pokemonActivedRoute: "1",
        showGetThisPokemonModal: {
            pokemon: null,
            show: false
        },
        tries: 0,
        myPokemons: []
    }
}