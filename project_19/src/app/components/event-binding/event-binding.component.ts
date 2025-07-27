import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-event-binding',
  imports: [MatInputModule,MatFormFieldModule,MatCheckboxModule,MatSelectModule,MatRadioModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  name="";
getName(){
this.name="karthik"
}
clearName(){
  this.name=""
}

/* double click event */
 result="";
getDoubleClickName(){
this.result="mamamiah"
}

/* input event*/
inputValue:any
onInput(evt:any){
const value=(evt.target as HTMLInputElement).value;
this.inputValue=value
console.log(value)
}

// onInputwithvalue(value:any){
// this.inputValue=value;
// }
selectedValue:any
fruitsChange(evt:MatSelectChange){
this.selectedValue=evt.value
}
ischecked:boolean=false;
checkBoxChange(evt:any){
  this.ischecked=evt.checked
}
//Radio button
selectedGender="";
onRadioChange(evt:MatRadioChange){
  this.selectedGender=evt.value
  console.log(evt)
}
//Keyevents
keyup=""
 onKeyUp(evt:KeyboardEvent){
this.keyup=evt.key
 }

 keydown=""
 onKeyDown(evt:KeyboardEvent){
this.keydown=evt.key
 }

 keyenter="";
 onKeyEnter(evt:any){
  if(evt.key=='Enter')
  console.log(evt)
  this.keyenter="enter key pressed"
 }

 keyfocus="";
 onfocus(){
  this.keyfocus="input got focused"
 }
 onBlur(){
  this.keyfocus="focus got blured"
 }

 onMouseOver (){
  console.log("on mouse over")
 }

  onMouseEnter (){
  console.log("on mouse enter")
 }

 onMouseLeave(){
  console.log("on mouse leave")
 }
 contextvalue=""
 contect(evt:any)
 {
console.log(evt)
evt.preventDefault();

this.contextvalue="right clicked"
 }
}
//////////////////////////////////////////////
//one way Binding//
//Interpolation/stringinterpolation -> {{}}
//propertyBinding ->[];
//styleBinding ->
//classBinding
//EventBinding -> ();
//////////////////////////////////////

// Template reference variable 

//Two way Binding//

