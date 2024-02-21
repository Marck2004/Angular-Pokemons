import { NumberSymbol } from "@angular/common";

export class pokemonEstadistica{
  id:number;
  species:
    {
      name:String;
    }
  abilities:[
    {
        ability:{
            name:String
        }
    }
  ]
  types:[
    {
        type:{
                name:String
            }
        
    }
  ]
  constructor(
    id:number,
    species:
      {
        name:String,
      },
      abilities:[
        {
            ability:{
                name:String
            }
        }
      ],
      types:[
        {
            type:{
                    name:String
                }
            
        }
      ]
    ){
      this.id=id;
      this.species = species;
      this.abilities = abilities;
      this.types = types
    }
}
