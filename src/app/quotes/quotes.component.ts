import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  goals: Quotes[] = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quotes(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Quotes(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
  ];

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete:Boolean, index:number){
    if (isComplete) {
      let toDelete= confirm(`Are you sure you want to Delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal: Quotes){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }


  constructor() { }

  ngOnInit() {
  }

}