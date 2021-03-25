import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ChangecolorDirective } from "./changecolor.directive";
import { AlphabetsDirective } from "./alphabets.directive";

@NgModule({
    declarations:[LoginComponent, 
        ForgotPasswordComponent, 
        ResetPasswordComponent, 
        ProfileComponent,
        AlphabetsDirective,
    ChangecolorDirective],
    imports:[FormsModule,
        BrowserModule,
        ReactiveFormsModule],
    providers:[],
    exports:[LoginComponent,
         ChangecolorDirective,
         AlphabetsDirective,
        ForgotPasswordComponent, ResetPasswordComponent, ProfileComponent]
})

export class UserModule{}