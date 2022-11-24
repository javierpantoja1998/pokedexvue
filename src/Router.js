import { createRouter, createWebHistory } from "vue-router";
import Pokemon from './components/PokemonComponent.vue';
import Localizaciones from './components/LocalizacionesComponent.vue';

const routes = [

    {
        path:"/", component:Pokemon
    },
    {
        path:"/location/:id", component:Localizaciones
    },
]
const router = new createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;