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
    UserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
