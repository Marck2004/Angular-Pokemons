import { NumberSymbol } from "@angular/common";

export class Pokemon{
  index:number;
  results:[
    {
      name:String;
      url:String;
    }
  ]
  constructor(
    index:number,
    results:[
      {
        name:String,
        url:String,
      }
    ]){
      this.index=index;
      this.results = results;
    }
}
