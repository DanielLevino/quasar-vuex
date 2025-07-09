<template>
    <q-card flat class="row justify-center flat" style="background-color: #121212">
        <img style="padding: 10px; max-width: 800px;" src="../assets/img/pokemons.png" alt=""/>
        <q-card-section class="text-h1 text-yellow text-weight-bolder text-center col-12 q-mb-xl">
            quasar pokedex
        </q-card-section>
        <q-btn 
            class="col-4 q-ma-md text-weight-bolder"
            label='Novos Pokemons'
            align="center"
            size="xl"
            color="white"
            text-color="red"
            @click="toPokemons()"
        />
        <q-btn 
            class="col-4 q-ma-md text-weight-bolder"
            label='Minha Pokedex'
            align="center"
            size="xl"
            color="white"
            text-color="red"
            @click="toPokedex()"
        />
    </q-card>
</template>

<script>
import {mapActions} from "vuex"

export default {
    name: "homePage",
    data () {
        return {

        }
    },
    methods: {
        ...mapActions("pokemons",["ActionGetMyPokemons"]),
        toPokemons() {
            this.$router.push('pokemons')
        },
        toPokedex(){
            this.$router.push('mypokedex')
        }
    },
    created() {
        this.ActionGetMyPokemons()
    }
}
</script>