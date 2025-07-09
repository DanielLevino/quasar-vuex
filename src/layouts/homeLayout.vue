<template>
    <q-layout view="hHh lpR fFf" style="background-color: #121212">
        <q-page-container>
        <router-view />
        </q-page-container>

        <q-footer style="background-color:#121212" class="text-white text-center q-pa-md">
            created by Daniel Levino
        </q-footer>

    </q-layout>
  </template>
  
  <script>
  export default {
    name: 'MainLayout',
  }
  </script>
  