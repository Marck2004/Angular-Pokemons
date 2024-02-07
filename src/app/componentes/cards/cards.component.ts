import { servicioApi } from './../../servicios/servicioApis';
import { Pokemon } from './../../modelo/pokemons';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  pokemons?:Pokemon[];

  constructor(private pokemon:servicioApi){}

  ngOnInit(){
    this.recuperarPokemons();
  }
  recuperarPokemons(){
    this.pokemon.recuperarPokemons().then(datos=>{
      this.pokemons=datos
      console.log(datos);

    });

  }
}
