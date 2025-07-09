export default {
    GetPokemonColor: (state) => (payload) => {
        var color = ''
        JSON.parse(JSON.stringify(state.pokemonsColorTypes)).forEach(e => {
           if(e.type == payload){
            color = e.color
           }
        })
        return `background-color: ${color}`
    }
}