import { Routes } from '@angular/router';
import { PokemonsTablaComponent } from './componentes/pokemons-tabla/pokemons-tabla.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegionsComponent } from './componentes/regions/regions.component';
import { PokemonsRegionComponent } from './componentes/pokemons-region/pokemons-region.component';

export const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"tablaPokemons",component:PokemonsTablaComponent},
  {path:"estadisticas/:id",component:EstadisticasComponent},
  {path:"regiones",component:RegionsComponent},
  {path:"pokemonsRegion/:name",component:PokemonsRegionComponent}
];
