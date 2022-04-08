import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes:Quote [] = [
    new Quote(1, "First Quote", "author", 0, 0,),
    new Quote(1, "First Quote", "author", 0, 0),
    new Quote(1, "First Quote", "author", 0, 0),
    new Quote(1, "First Quote", "author", 0, 0),
    new Quote(1, "First Quote", "author", 0, 0),
    new Quote(1, "First Quote", "author", 0, 0)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
