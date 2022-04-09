import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isUpVote = new EventEmitter <boolean>();
  @Output() isUpVoted = new EventEmitter<boolean>();

  upVote(){
    this.quote.upvotes+=1;
  }

  downVote () {
    this.quote.downvotes+=1;
  }

  quoteDelete (UpVoted:boolean) {
    this.isUpVoted.emit(UpVoted);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
