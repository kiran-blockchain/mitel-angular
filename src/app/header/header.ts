import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
    selector: 'app-header',
    templateUrl: "./header.html",
    styleUrls: ["./header.css"]
})
export class HeaderComponent {
    countries = [
        {
            name: "India",
            id: "IN"
        }, { name: "Australia", id: "AU" }, 
        { name: "United States", id: "USA" }]

    
    navItems = ["Home", "Electronics", "Apparel"];
    date = new Date().toString();
    phone="9959687987";
    selectedCountry ='';
    //99999-99999
    //999-999-9999
    cartItems:any;
    constructor(private cartSvc:CartService){
        this.cartItems = this.cartSvc.cartItems;
        setInterval(()=>{
            this.date = new Date().toString(); 
        },3000)
    }
    
}