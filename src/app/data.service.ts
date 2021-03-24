import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService{
    constructor(private http:HttpClient){

    }
    getCountries(){
        return this.http.get("https://restcountries.eu/rest/v2/all");
    }
}