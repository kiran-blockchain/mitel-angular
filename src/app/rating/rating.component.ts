import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit  {

  constructor() { 
    console.log("I am rating constructor")
    console.log(this.starRating);
  }

  ngOnInit(): void {
    
    console.log("I am raiting init")
    this.stars=[];
    for(let i=1;i<=this.starRating;i++){
      this.stars.push(i);
    }
  }
  ngOnChanges(){
    console.log("Ng On changes called", this.starRating);
  }
  ngDoCheck(){
    console.log("ng do check");
  }
  ngOnDestroy(){
    console.log("Rating Component Destoryed");
  }

  @Input()
  starRating=0;
  
  stars:any;
}
