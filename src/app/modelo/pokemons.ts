export class Pokemon{
  count:number;
  next:String;
  previous:null;
  results:[
    {
      name:String;
      url:String;
    }
  ]
  constructor(count:number,
    next:String,
    previous:null,
    results:[
      {
        name:String,
        url:String,
      }
    ]){
      this.count = count;
      this.next = next;
      this.previous = previous;
      this.results = results;
    }
}
