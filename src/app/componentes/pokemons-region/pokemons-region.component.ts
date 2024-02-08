import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { regiones } from '../../servicios/regiones';

@Component({
  selector: 'app-pokemons-region',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule],
  templateUrl: './pokemons-region.component.html',
  styleUrl: './pokemons-region.component.css'
})
export class PokemonsRegionComponent implements AfterViewInit{
  dataSource = new MatTableDataSource<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private router:ActivatedRoute,private regionesServicio:regiones){

  }

    ngAfterViewInit() {
    if(this.paginator){
    this.dataSource.paginator = this.paginator;
  }
    this.mostrarPokemons();
  }
  mostrarPokemons(){
    console.log("Entramos a la funcion");
    
    this.router.params.subscribe(parametros=>{
      const nombreRegion = parametros['name'];
      
      this.regionesServicio.devolverPokemon(nombreRegion).then((datos:any)=>{
        console.log(datos);
        
      })
    })
  }

}

