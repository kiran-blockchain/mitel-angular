
import { Component, OnInit } from '@angular/core';
import { COUNTRY_LIST } from '../constants/lookup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  countryList;
  constructor() { 
    this.countryList = COUNTRY_LIST;
  }

 
  register = {
    email: "kiran",
    password: "kiran",
    confirmPassword:"",
    gender:"",
    country:"",
    agreeTerms:false
  }

}
