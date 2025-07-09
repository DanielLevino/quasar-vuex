export default {
    SET_POKEMONS(state, payload){
        state.pokemons = payload
    },
    ADDTOARRAY_POKEMON(state, payload){
        if(state.myPokemons.filter(pkm => pkm.id == payload.id).length>0){
            payload.catched = 1
        }else { payload.catched = 0 }
        state.pokemons.push(payload)
    },
    SET_STATESHOWGETTHISPOKEMONMODAL(state, payload){
        state.showGetThisPokemonModal = payload
    },
    SET_TRIES(state, payload){
        var rand = Math.floor(Math.random() * 5) + 1
        // console.log("tries",rand);
        state.tries = rand
    },
    DECREMENTTRIESSTATE(state, payload){
        // console.log("tries = ", state.tries);
        state.tries = state.tries-1
        // console.log("tries - 1 = ", state.tries);
    },
    REMOVEPOKEMONFROMARRAY(state, payload){
        state.pokemons.forEach((el, index) => {
            if(el.item == payload){
                state.pokemons.splice(index,1)
            }
        });
    },
    SET_MYPOKEMONS(state, payload){
        state.myPokemons = payload;
    }
}
