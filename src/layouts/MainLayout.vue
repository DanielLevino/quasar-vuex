<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #121212">
    <q-header>
      <q-toolbar class="bg-yellow justify-between">
        <q-btn round flat to="/">
            <img style="max-width: 40px;" class="q-mt-sm" src="../assets/img/pokebola.png">
          <div class="col-12 text-red text-weight-bolder">
            home
          </div>
        </q-btn>
        <div class="text-h5 text-uppercase text-weight-bolder text-red">Quasar Pokedex</div>
        <q-btn round flat to="/mypokedex">
          
            <img style="max-width: 60px;" class="q-mt-sm" src="../assets/img/pokedex.png">
          
          <div class="col-12 text-red text-weight-bolder">
            pokedex
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>
