import { Pokemon } from "../modelo/pokemons";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class servicioApi {

    constructor(){}

    async recuperarPokemons():Promise<Pokemon[]>{

      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

        const data:Pokemon[] = await response.json();

        return data;
      }
      async estadisticasPokemon(id:number):Promise<any|[]>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
        const data = await response.json();
        return data;
    }
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
