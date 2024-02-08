import { Component } from '@angular/core';
import { regiones } from '../../servicios/regiones';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuComponent } from '../menu/menu.component';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [MatTabsModule,MenuComponent,NgFor,NgIf],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.css'
})
export class RegionsComponent {
  arrRegiones?:any;

  constructor(private regiones:regiones,
    private router:Router){}

  ngOnInit(){
    this.devolverRegiones();
  }

  devolverRegiones(){
    this.regiones.devolverRegiones().then((datos:any)=>{
      this.arrRegiones=datos.results;
      console.log(this.arrRegiones);
    })
  }
  traerPokemons(nombre:String){

      this.router.navigate(['/pokemonsRegion',nombre]);
  }
}
