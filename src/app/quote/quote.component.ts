import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes:Quote [] = [

      new Quote(1, 'Postivity', 'Miracles happen to those who believe in them."', ' – Bernhard Berenson', 'Agnes', 0, 0, new Date(2021, 6, 15)),
  
      new Quote(2, 'Happiness', '"Happiness is when what you think, what you say, and what you do are in harmony."', ' Mahatma Gandhi', 'Koinange`', 0, 0, new Date(2021, 5, 20)),
  
      new Quote(3, 'Technology', '“Once a new technology rolls over you, if you are not part of the steamroller, you are part of the road.”', ' Stewart Brand', 'Laura>', 0, 0, new Date(2019, 8, 12)),
  
      new Quote(4, ' Tech', '“If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.”', '– Lyndon B. Johnson', 'Cythia', 0, 0, new Date(2021, 7, 17)),
  
      new Quote(5, 'Communication', '“The most important thing in communication is to hear what isn’t being said.”', ' Peter Drucker', 'Elias', 0, 0, new Date(2021, 6, 22)),
  
      new Quote(6, 'Coding', ' “Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”', ' Dan Salomon', 'Mary',  0, 0, new Date(2021, 9, 20)),
    ];

 
  toggleDetails(index: any) {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }

  addNewQuote(quote: any) {
    let quoteLength = this.Quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.Quotes.push(quote);
  }

  deleteQuote(isUpVoted: any, index: any) {
    if (isUpVoted) {
      let toDelete = confirm(`Confirm you want to delete  ${this.Quotes[index].quote} quote.`)

      if (toDelete) {
        this.Quotes.splice(index, 1);
      }
    }
  }

  arr: number[] = this.Quotes.map(Quote=>Quote.upvotes)
  highest=Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}
