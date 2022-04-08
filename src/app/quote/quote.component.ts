import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes:Quote [] = [
    new Quote(1, "First Quote", "author", 2, 0),
    new Quote(2, "First Quote", "author", 3, 0),
    new Quote(3, "First Quote", "author", 0, 0),
    new Quote(4, "First Quote", "author", 0, 0),
    new Quote(5, "First Quote", "author", 0, 0),
    new Quote(6, "First Quote", "author", 0, 0),
  ];

  arr: number[] = this.Quotes.map(Quote=>Quote.upvotes)
  highest=Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}
