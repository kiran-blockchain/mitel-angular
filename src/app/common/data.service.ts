import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DataService{
    constructor(private http:HttpClient){
    }
    nonAuthPost(url:string,data:any){
        return this.http.post(url,data);
    }
    authPost(url:string,data:any){
        let headers= new HttpHeaders();
        return this.http.post(url,data,{headers:headers});
    }
    nonAuthGet(url:string){
        return this.http.get(url);
    }
    authGet(url:string){
        let headers= new HttpHeaders();
        return this.http.get(url,{headers:headers});
    }
}