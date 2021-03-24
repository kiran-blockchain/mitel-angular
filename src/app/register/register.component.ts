
import { Component, OnInit } from '@angular/core';
import { COUNTRY_LIST } from '../constants/lookup';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  countryList=[{
    alpha2Code:"",
    name:""
  }];
  constructor(private dataSvc:DataService) { 
   // this.countryList = COUNTRY_LIST;
    this.dataSvc.getCountries().subscribe((result:any)=>{
      console.log(result);
      this.countryList = result;
    })
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
