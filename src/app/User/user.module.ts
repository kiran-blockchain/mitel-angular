import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, ProfileComponent],
    imports:[FormsModule,
        BrowserModule,
        ReactiveFormsModule],
    providers:[],
    exports:[LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, ProfileComponent]
})

export class UserModule{}