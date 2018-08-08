import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { ProfileService} from "../profile/profile.service";
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
public asd:string;
public headerInput:string;

public childData:string = "";


@Output()
 public passData  = new EventEmitter(); // this is the output to hear in the parent component


@Input()
get dataOutput(){
 return this.childData;
}

set dataOutput(val){
  this.childData = this.headerInput;
 this.passData.emit(this.headerInput); 
}

  constructor(public profileService: ProfileService) { 
    this.asd ="dfgfdgfdxg";
    this.headerInput="Hello";
  }



  //shdvfhjgsdfgs
  ngOnInit() {
  }

  searchbuttonclick(){
    console.log(this.headerInput);
    this.passData.emit(this.headerInput);
    this.profileService.setpassChildToParent(this.headerInput); // we're using the service to pass data from child to parent
  }
}
