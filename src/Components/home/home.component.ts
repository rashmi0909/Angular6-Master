import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router , ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public route:ActivatedRoute, public router: Router) { }
  ngOnInit() {  
    
    
    
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => { // (+) before `params.get()` turns the string into a number        
        +params.get('username');
        console.log();
        return [];
      })
    );
  }


  navToProfile(){
    this.router.navigate(["/profile", { username:"sandeep", password:"sandeep"}]);

  }

}
