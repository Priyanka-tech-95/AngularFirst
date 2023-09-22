import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keepNoteApp';
  mytitle = 'Test interpolation';
 public btnCSSStyle = 'btn btn-warning';
 public IsDisable = false;
 public buttonText ="Login!!";
 public userName: String;
 constructor(){
  this.userName="StackRoute!!";
 }
 
//  validateData = () =>{

//   this.buttonText ="Validating !!" 
//  }
//  updateUserName($event){

//   this.userName = $event.target.value;
//  }


}
