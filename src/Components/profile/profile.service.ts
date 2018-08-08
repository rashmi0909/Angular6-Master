import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private passChildToParent:string;

  constructor(public http:Http) {

   }
setpassChildToParent(value:string){
this.passChildToParent=value;
}
getpassChildToParent(){
  return this.passChildToParent;
}
   makeprofilecallservice(){
     return this.http.get("https://jsonplaceholder.typicode.com/posts")
   }
}
