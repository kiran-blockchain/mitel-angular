import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.stars=[];
    for(let i=1;i<=this.starRating;i++){
      this.stars.push(i);
    }
  }
  @Input()
  starRating=0;
  
  stars:any;
}
