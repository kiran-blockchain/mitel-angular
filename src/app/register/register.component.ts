import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { 
    this.register= new FormGroup({
      email:new FormControl(''),
  
      password:new FormControl('')
    })
    this.register.valueChanges.subscribe(data=>{
      console.log(JSON.stringify(data));
    })
  }

  ngOnInit(): void {
  }
  register:FormGroup;

}
