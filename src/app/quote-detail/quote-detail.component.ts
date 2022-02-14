import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() Quotes!: Quotes;
  @Output() isComplete = new EventEmitter<Boolean>()

  Likes: number = 0;
  Dislikes: number = 0;

  upVoteClick(){
    this.Likes++;
  }

  downVoteClick(){
    this.Dislikes++;
  }

  

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit() {
  }

}