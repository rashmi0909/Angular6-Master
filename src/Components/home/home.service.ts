import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http:Http) { 

    }
    makeHomeServiceCall(username:string, password:string){
      return this.http.get("https://jsonplaceholder.typicode.com/users");

}
}
