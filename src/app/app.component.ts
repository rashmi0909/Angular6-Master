import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
   //console.log(this.readCode("sandeep"));
  }

  readCode(stringInput){
      var x = stringInput.split('');
      return x.reduce(function(prev, item, index){
   
           if((stringInput.match(new RegExp(item, "g")) || []).length == 1){
               prev.push(item);
           } else{
               if(prev.indexOf(item) == -1){
                   prev.push(item);
               }
           };
           return prev;
      },[]).join('');
   }
}
