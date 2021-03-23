import { Component } from "@angular/core";

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
}