<template>
    <div class="row">
        <div class="col-12 text-yellow text-weight-bolder text-center text-h2 q-my-md">
            My Pokemons
        </div>
        <div v-if="myPokemons.length>0" class="col-12">
            <div class="row">
                <div v-for="(pokemon, key) in myPokemons" :key="key" class="col-lg-2 col-md-4 col-sm-6 col-xs-12 q-pa-md">
                    <q-card :style="GetPokemonColor(pokemon.type)">
                        <q-card-section class="text-right">
                            <div class="row justify-end">
                                {{ pokemon.index}}
                                <q-btn color="white" text-color="black" :label="pokemon.id" round unelevated/>
                            </div>
                        </q-card-section>
        
                        <img class="q-pa-sm" :src="`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`" alt="">
                        
                        <q-card-section>
                            <div class="text-center text-h6">
                                {{ pokemon.name }}
                            </div>
                            <div class="text-center">
                                {{ pokemon.type }}
                            </div>
                            <div>
                                Amount: {{pokemon.amount}}
                            </div>
                            
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            
        </div>
        <div v-else class="col-12 text-white text-center text-h1 q-pa-xl">
            No Pokemons
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default { 
    name: "PokemonsPage",
    data () { return {
        //myPokemons: []
    }},
    computed: {
        ...mapState("pokemons", ["myPokemons"]),
        ...mapGetters("pokemons", ["GetPokemonColor"]),
    },
    methods: {
        ...mapActions("pokemons", ["ActionGetMyPokemons"]),
    },
    created() {
    },
    beforeCreate() {
    },
    beforeMount() {
        this.ActionGetMyPokemons()
    },
    unmounted() {
    },
}
</script>
<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
