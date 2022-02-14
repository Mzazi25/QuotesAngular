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

  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  likeButtonClick(){
    this.numberOfLikes++;
  }

  dislikeButtonClick(){
    this.numberOfDislikes++;
  }

  

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit() {
  }

}