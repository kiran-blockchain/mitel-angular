import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  feedback=0;
   
  @Output()
  userrating:EventEmitter<any>= new EventEmitter();

  userFeedBack(){
    console.log(this.feedback);
    this.userrating.emit(this.feedback);
  }
  
}
