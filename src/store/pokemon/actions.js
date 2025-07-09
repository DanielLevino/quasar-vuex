import { API } from "../../http/Connection";

export const ActionGetPokemons = ({ dispatch, commit }, payload) => {
  var rand;
  dispatch("ActionClearStatePokemons");

  return new Promise(async (resolve, reject) => {
    for (var i = 0; i <= 5; i++) {
      rand = Math.floor(Math.random() * 150) + 1;
      await API.get(`/pokemon/${rand}`)
        .then((response) => {
          response.data.item = i;
          commit("ADDTOARRAY_POKEMON", response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

export const ActionClearStatePokemons = ({ dispatch, commit }, payload) => {
  commit("SET_POKEMONS", []);
};

export const ActionSetStateShowGetThisPokemonModal = (
  { dispatch, commit },
  payload
) => {
  commit("SET_STATESHOWGETTHISPOKEMONMODAL", payload);
  commit("SET_TRIES");
};

export const ActionDecrementTries = ({ dispatch, commit }, payload) => {
  commit("DECREMENTTRIESSTATE");
};

export const ActionRemovePokemonFromArray = ({ dispatch, commit }, payload) => {
  commit("REMOVEPOKEMONFROMARRAY", payload);
  dispatch("ActionSetStateShowGetThisPokemonModal", {
    pokemon: null,
    show: false,
  });
};

export const ActionGetMyPokemons = ({dispatch, commit}, payload) => {
  let myPokemons = localStorage.getItem('myPokemons')
  if(myPokemons){
    myPokemons = JSON.parse(myPokemons)
    myPokemons = myPokemons.sort((a,b)=> a.id - b.id)
    commit("SET_MYPOKEMONS", myPokemons)
  }
};