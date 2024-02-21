import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from '../menu/menu.component';
import { NgFor, NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { servicioApi } from '../../servicios/servicioApis';
import { pokemonEstadistica } from '../../modelo/pokemonEstadistica';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MenuComponent,NgIf,NgFor,SpinnerComponent],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent implements OnInit{
  detallePokemon?:pokemonEstadistica;
  id?: number;
  estats?: any;
  img?:String;
  loading:boolean = true;

  constructor(private router: ActivatedRoute,
    private estadisticaPokemon:servicioApi,
    private location:Location){}

  ngOnInit(): void {
      this.devolverEstadisticas();
  }
  devolverEstadisticas(){
    this.router.params.subscribe(parametros=>{
      this.id = +parametros['id'];
      this.estadisticaPokemon.estadisticasPokemon(this.id).then((datos:any)=>{
        this.estats = datos;
        this.detallePokemon = datos;
        console.log(this.estats);
        console.log(this.detallePokemon?.types[0].type.name);
        
        this.img = datos.sprites.front_default;
        this.loading = false;
      });

    })
  }
  convertirShiny(){
    if(this.img == this.estats.sprites.front_default){
        this.img = this.estats.sprites.front_shiny;
    }else{
      this.img = this.estats.sprites.front_default;
    }
  }
  volverAtras(){
    this.location.back();
  }
}
