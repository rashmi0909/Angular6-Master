import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';
import {LoginComponent} from "../Components/login/login.component";
import {HomeComponent} from "../Components/home/home.component";
import { ProfileComponent } from "../Components/profile/profile.component";


const routes:Routes = [
{ path:"", redirectTo:'/login', pathMatch:'full' },
{ path:"login", component:LoginComponent },
{ path:"home", component:HomeComponent },
{ path:"profile", component:ProfileComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[
        RouterModule
    ]    
})
 
export class AppRoutingModule{}