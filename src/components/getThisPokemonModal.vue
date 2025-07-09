<template>
    <q-dialog
        :model-value="showGetThisPokemonModal.show"
        @before-hide="hide()"
    >
    <q-card class="pokemon-card pointer" :style="GetPokemonColor(showGetThisPokemonModal.pokemon.types[0].type.name)">
          <div 
            class="text-h4 text-center text-weight-bolder q-pa-md"
          > 
            {{showGetThisPokemonModal.pokemon.name}} 
          </div>
          <img class="q-pa-xl" style="max-width: 400px;" :src="`https://cdn.traction.one/pokedex/pokemon/${showGetThisPokemonModal.pokemon.id}.png`" alt="">
          <div class="row justify-center">
            <q-rating
              v-model="tries"
              max="5"
              size="3em"
              color="white"
              color-selected="red-9"
              icon="favorite_border"
              icon-selected="favorite"
              icon-half="favorite"
              no-dimming
              readonly
              />
          </div>
          <q-card-actions class="row justify-center">
              <q-btn
                v-if="tries>0 && !catched"
                style="font-weight: 900; font-size: large;"
                class="col-6 q-ma-md"
                label="try catch"
                color="white"
                text-color="red"
                @click="tryCatch()"
              />
              <q-btn
                v-if="tries<1 && !catched"
                style="font-weight: 900; font-size: large;"
                class="col-6 q-ma-md"
                label="escape"
                color="white"
                text-color="red"
                v-close-popup
              />
              <q-btn
                v-else-if="tries>0 && catched"
                style="font-weight: 900; font-size: large;"
                class="col-6 q-ma-md"
                label="Catch!!!"
                color="white"
                text-color="green"
                v-close-popup
                @click="addToMyPokedex()"
              />
          </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex"

export default {
    name: 'GetThisPokemonModal',
    data() {
        return {
          catched: false,
          item: null
        }
    },
    computed: {
        ...mapState('pokemons',['showGetThisPokemonModal','tries']),
        ...mapGetters('pokemons',["GetPokemonColor"])
    },
    beforeMount() {
    },
    methods: {
        ...mapActions('pokemons', ["ActionSetStateShowGetThisPokemonModal", "ActionDecrementTries", "ActionRemovePokemonFromArray"]),
        hide(){
          if(this.item == null) this.item = this.showGetThisPokemonModal.pokemon.item
          this.ActionRemovePokemonFromArray(this.item)
          this.ActionSetStateShowGetThisPokemonModal({
            pokemon: null,
            show: false
          })
          this.item = null
        },
        tryCatch() {
          if(this.item == null) this.item = this.showGetThisPokemonModal.pokemon.item
          var rand = Math.floor(Math.random() * 20 + 1);
          var rand2 = Math.floor(Math.random() * 5 + 13);
          console.log(`rolando d20 com dificuldade ${rand2}`);
          console.log("resultado = ", rand);
          this.catched = ( rand > rand2) ? true : false;
          if (!this.catched) this.ActionDecrementTries();
        },
        removeThisPokemon(){
          this.ActionRemovePokemonFromArray(this.item)
        },
        addToMyPokedex(){
          let myPokemons = localStorage.getItem('myPokemons')
          if(!myPokemons){ myPokemons = []; }
          else {myPokemons = JSON.parse(myPokemons)}
          if(myPokemons.filter(el => el.id == this.showGetThisPokemonModal.pokemon.id).length>0){
            myPokemons.forEach(pkm => {
              if(pkm.id == this.showGetThisPokemonModal.pokemon.id) pkm.amount++
            });
          }else{
          myPokemons.push({
              id: this.showGetThisPokemonModal.pokemon.id,
              name: this.showGetThisPokemonModal.pokemon.name,
              type: this.showGetThisPokemonModal.pokemon.types[0].type.name,
              amount: 1
            })
          }
          localStorage.setItem('myPokemons', JSON.stringify(myPokemons));
          this.ActionRemovePokemonFromArray(this.item)
          this.catched = false;
        }
    }
}
</script>
