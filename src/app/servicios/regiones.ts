import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class regiones{
    constructor(){}

    async devolverRegiones(){
        const response = await fetch("https://pokeapi.co/api/v2/region/");
        const data = await response.json();
        return data;
    }
    async devolverPokemon(name:any){
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/"+name);
        const data = await response.json();
        return data;
    }
}