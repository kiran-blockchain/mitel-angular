import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';
import { ProductsComponent } from './prodcuts/products.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { UserModule } from './User/user.module';
import { PhoneFormatPipe } from './phone.pipe';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './User/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    RegisterComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    RouterModule.forRoot([
      {
        path:"login",component:LoginComponent
      },
      {
        path:"register",component:RegisterComponent
      },
      {
        path:"products",component:ProductsComponent
      },
      {
        path:"",component:LoginComponent
      }
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
