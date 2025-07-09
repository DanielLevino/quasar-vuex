
var pokemon = 1
const routes = [
  {
    path: '/',
    component: () => import('layouts/homeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') }
    ]
  },
  {
    path: '/pokemons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pokemons.vue') },
      { path: `${pokemon}`, component: () => import('pages/pokemon.vue') }
    ]
  },
  {
    path: '/mypokedex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/myPokedex.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
