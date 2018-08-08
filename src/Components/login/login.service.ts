import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:Http) { 

  }

  makeLoginServiceCall(username:string, password:string){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
