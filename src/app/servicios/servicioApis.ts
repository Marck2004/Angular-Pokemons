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

  }
