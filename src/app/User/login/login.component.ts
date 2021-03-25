import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}  from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email:new FormControl('',[
      Validators.required,
    Validators.minLength(10),
    Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    ]),
    password:new FormControl(''),
    age:new FormControl(0)
  })
  constructor() { 
  }
  alphabets ="^[a-zA-Z ]*$";
  numbersOnly ="^[0-9]*$";
  get f(){
    return this.loginForm.controls;
  }
  ngOnInit(): void {
  }
  login={
    email:"",
    password:""
  }

}
