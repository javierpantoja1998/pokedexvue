<template>
    <img src="./../assets/images/logo1rick.png" style="width:400px; height:400px">
    <div v-for="personaje in personajes" :key="personaje.id">
        
        <div class="card bg-dark" style=" display:inline-flex;">
            <img :src="personaje.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title" style="color:lightblue">NOMBRE:{{personaje.name}}</h3>
                <h4 class="card-text" style="color:lightblue" >GENERO:{{personaje.gender}}</h4>
                <a href="#" class="btn btn-primary">DETALLES</a>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonService from '@/services/PokemonService';
const service = new PokemonService;

export default {
    name:"PokemonComponent",
    methods:{
        loadPersonajes(){
            service.getPokemons().then(res=>{
                
                this.personajes = res
            });
        }
    },
    data(){
        return{
            personajes:[]
        }
    },
    mounted(){
        this.loadPersonajes();
    }
}
</script>

<style>
    body {
  background-color: lightblue;
}


</style>