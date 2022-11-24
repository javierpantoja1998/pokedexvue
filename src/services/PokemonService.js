import axios from "axios";
import Global from "@/Global";

export default class PokemonService {

getPokemons(){
    return new Promise(function(resolve){
        var request = "api/character";
        var url = Global.url + request;
        axios.get(url).then(res=>{
            resolve(res.data.results);
        });
    });
}

getLocations(){
    return new Promise(function(resolve){
        var request = "api/location";
        var url = Global.url + request;
        axios.get(url).then(res=>{
            resolve(res.data.results)
        });
    })
}

}