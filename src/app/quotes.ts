export class Quotes {
    showDescription: boolean;
    constructor(public quoteId:number, public author:string, public publisher:string, public quoteTitle:string, public Description:string, public completeDate: Date){
      this.showDescription = false;
    }
  }