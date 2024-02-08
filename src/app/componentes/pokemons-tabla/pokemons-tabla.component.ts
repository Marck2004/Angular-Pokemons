import { servicioApi } from './../../servicios/servicioApis';
import { Pokemon } from './../../modelo/pokemons';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons-tabla',
  standalone: true,
  imports: [MatTableModule,MatSortModule,NgIf,MatPaginator,MenuComponent],
  templateUrl: './pokemons-tabla.component.html',
  styleUrl: './pokemons-tabla.component.css'
})
export class PokemonsTablaComponent implements AfterViewInit{
  pokemons: any = [];
  displayedColumns: string[] = ['id', 'name', 'foto','estats'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  
  constructor(private pokemon:servicioApi,
    private _liveAnnouncer: LiveAnnouncer,
    private router:Router){
    this.pokemons = [];
  }
  
  ngAfterViewInit() {

    if (this.dataSource && this.sort) {
      
      this.dataSource.sortingDataAccessor = (pokemon:Pokemon, sortHeaderId:string) => {
        
        if(sortHeaderId === 'id'){
          return pokemon.index;
        }
        return 0;
      };
      this.dataSource.sort = this.sort;
    }
  }
  ngOnInit(){
    this.recuperarPokemon();
  }
   recuperarPokemon(){
    this.pokemon.recuperarPokemons().then((datos: any) => {
      this.pokemons = datos.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        index: index + 1
      }));
      this.dataSource.data = this.pokemons;
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      console.log(this.pokemons);
    });
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
}
  mostrarEstadisticas(id:number){
    this.router.navigate(['/estadisticas',id]);
  }
}