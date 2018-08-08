import { Component, OnInit } from '@angular/core';
import { LoginService} from "./login.service";
import { LoginResponse } from "../../Models/Models";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginResp: Array<LoginResponse> = [];
  public username:string;
  public password:string;
  
  
  
  constructor(public loginService:LoginService, public router:Router) { 
    this.username = "shjbf";
    this.password= "aksjbdfjashb";
  }

  ngOnInit() {
  }

  onSubmitButtonClicked(){
    this.loginService.makeLoginServiceCall(this.username, this.password).subscribe((r)=>{        
      console.log(r.json());
      this.loginResp.push(r.json());
    }, (error)=>{

    });
    console.log(this.loginResp);
    // passing data from one component to another component as a Query Parameter.
    this.router.navigate(["/home", { username:"sandeep", password:"sandeep"}]);

  } 

}
