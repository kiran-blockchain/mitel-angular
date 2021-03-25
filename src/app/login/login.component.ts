import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { EXTERNAL_URL } from '../helpers/external.url';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataSvc: DataService) {
    this.loginObj = new Login();
  }
  loginObj: Login;

  ngOnInit(): void {
    this.login();
  }   
  login() {
    this.dataSvc.nonAuthPost(EXTERNAL_URL.LOGIN, this.loginObj).subscribe(
      (result) => {
        console.log(result);
      }, err => {
        console.log(err);
      });
  }


}
