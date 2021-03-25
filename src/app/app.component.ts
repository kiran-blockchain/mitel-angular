import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
  console.log("I am constructor in app");
  }
  ngOnInit(): void {
    console.log("I am init method");
    //throw new Error('Method not implemented.');
  }
  title = 'bascis';
}
