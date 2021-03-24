
import { Component, OnInit } from '@angular/core';
import { COUNTRY_LIST } from '../constants/lookup';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  countryList = [{
    alpha2Code: "",
    name: ""
  }];
  constructor(private dataSvc: DataService) {
    // this.countryList = COUNTRY_LIST;
    this.dataSvc.getCountries().subscribe(
      (result: any) => {
        this.countryList = result.map((x: any) => {
          return { name: x.name, alpha2Code: x.alpha2Code };
        })
      },
      (err:any) => {
        console.log(err);
      }
    )
  }
  emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  register = {
    email: "kiranDDDDDDDDDD",
    password: "kiran",
    confirmPassword: "",
    gender: "",
    country: "",
    agreeTerms: false
  }

}
