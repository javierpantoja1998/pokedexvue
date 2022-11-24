<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./../assets/images/rik.png" style="width:90px; height: 90px;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              HOME
            </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            localizaciones
          </a>
          <ul class="dropdown-menu">
            <li v-for="loc in localizaciones" :key="loc.id">
              <router-link class="dropdown-item btn btn-info" :to="'/location/' + loc.id ">
                {{loc.name}}
              </router-link>

            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import PokemonService from '@/services/PokemonService';
const service = new PokemonService;

export default {
  name:"MenuRutas",
  methods:{
    loadLocalizaciones(){
      service.getLocations().then(res=>{
        console.log(res)
        this.localizaciones = res
      });
    }
  },
  data(){
    return{
      localizaciones:{}
    }
  },
  mounted(){
    this.loadLocalizaciones();
  }
}
</script>

