import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes [] = [
    new Quotes (1,'Enock Abere', 'Electricity', 'Mambo ya stima achia watu wa stima. Ntakufinya!', 'Isaac Newton', new Date(2021,6,1)),
    new Quotes (2,'Enock Abere', 'Life Hack', 'Ama niambie landlord nikae ile nyumba haina mtu kuliko ikae bure, ikipata mtu nihame', 'Isaac Newton',new Date(2021,6,2)),
    new Quotes (3,'Enock Abere', 'Kizangila', 'Omosh, this property is not for sale','Isaac Newton', new Date(2021,6,2)),
    new Quotes (4,'Enock Abere', 'Nduthi Guys', 'Weka simu kwa mfuko ukiona nduthi guys','Isaac Newton', new Date(2021,6,3))
  ]

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete:Boolean, index:number){
    if (isComplete) {
      let toDelete= confirm(`Are you sure you want to Delete ${this.quotes[index].quoteId}?`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quotes){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit() {
  }

}

