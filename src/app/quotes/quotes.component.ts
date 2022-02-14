import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes [] = [
    new Quotes (1,'France', 'Caleb' ,'RIESLING', 'Always very high in acid, when made as a table wine Rieslings can be harmoniously sweet (sweet and sour) or dry (very acidic). The wine is polarizing because some people find dry styles too acidic and sweet styles too cloying, but sweetness is always a wine making decision and not inherent to the grape.'),
    new Quotes (2,'Turkey', 'Mzazi','SYRAH', ' Syrah (aka Shiraz) is a full-bodied red wine thats heavily planted in the Rhône Valley in France and Australia. The wines have intense fruit flavors and medium-weight tannins. Syrah is commonly blended with Grenache and Mourvèdre to create the red Rhône blend. The wine often has a meaty (beef broth, jerky) quality.'),
    new Quotes (3,'Egypt', 'Langat','ZINFANDEL', ' Zinfandel (aka Primitivo) is a medium-bodied red wine that originated in Croatia. Wines are fruit-forward and spicy with a medium length finish. Zinfandel is a red grape that may be better known in its pink variation, White Zinfandel.'),
    new Quotes (4,'Barbados', 'Kevin','CHARDONNAY', 'Chardonnay is a dry full-bodied white wine that was planted in large quantities for the first time in France. When oak-aged, Chardonnay will have spicy, bourbon-y notes. Unoaked wines are lighter and zesty with apple and citrus flavors. Chardonnay is the white grape of Burgundy.'),
    new Quotes (5, 'India','Master','Cabernet Sauvignon','This is the most loved and popular red wine brand in the world. Cabernet Sauvignon grape comes from a cross between Cabernet Franc and Sauvignon Blanc grapes developed naturally. Its origin is Bordeaux in France. It has a characteristic of high concentration, rich flavor, high tannin content, and unhurriedly aged, which in tandem bring out the elegance in both the taste and aromas. ')
  ];

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
    let quotesLength = this.quotes.length;
    quote.quoteId = quotesLength+1;
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit() {
  }

}

