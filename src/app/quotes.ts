export class Quotes {
    showDescription: boolean;
    constructor(public quoteId:number, public owner:string, public quoteTitle:string, public Description:string, public author:string, public completeDate:Date){
      this.showDescription = false;
    }
  }