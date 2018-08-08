import { Component, OnInit } from '@angular/core';
import { ProfileService} from "./profile.service";
import { Router } from '@angular/router';



class profileResp{
 
  constructor(private userId: number,private id: number,private title: string,private body: string){}
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
public childData:string;
  public profileResp: Array<profileResp> = [];
public list:Array<string> = [];


public childDataService:string;


  constructor(public profileService: ProfileService, public router:Router) { 
    this.childDataService = this.profileService.getpassChildToParent();
  }

  ngOnInit() {    
    let arr= ["1", "2","3","4","5"];
    console.log(arr);
    this.list = this.list.concat(arr);
    console.log(this.list);
    this.onSubmitButtonClicked();


  }


  onSubmitButtonClicked(){
    this.profileService.makeprofilecallservice().subscribe((r)=>{        
      this.profileResp = r.json();
    }, (error)=>{

    });
    console.log(this.profileResp.length);
    // passing data from one component to another component as a Query Parameter.
    //this.router.navigate(["/home", { username:"sandeep", password:"sandeep"}]);

  } 
}
