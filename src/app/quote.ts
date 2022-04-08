export class Quote {
    
    showDescription: boolean;

  constructor(

    public id: number,
    public quote: string,
    public author: string,  
    public upvotes: number, 
    public downvotes: number, )

    {

    this.showDescription=false;
  }
}
