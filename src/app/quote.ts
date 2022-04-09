export class Quote {
  [x: string]: any;
    
    showDescription: boolean;

   constructor(

    public id: number,
    public quote: string,
    public description: string,
    public author: string,
    public yourname: string,  
    public upvotes: number, 
    public downvotes: number,
    public postDate: Date )

    {

    this.showDescription=false;
  }
}
