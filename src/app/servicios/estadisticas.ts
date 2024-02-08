import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class estadisticas{
    constructor(){}

    async estadisticasPokemon(id:number):Promise<any|[]>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
        const data = await response.json();
        return data;
    }
}