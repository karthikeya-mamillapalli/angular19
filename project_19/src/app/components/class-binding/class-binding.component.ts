import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding', 
  imports: [CommonModule],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
 textcolor='myClass'
  fontTextSize="myClassTextSize" 
  //here on left handside we are using the property which is in html ,
  //and in right handside we are using the value ie class name in css 
 myGroups={
  myClass:true,
  myClassTextSize:true
 }
}

//style binding value will be assigned directly
//class binding value will be comming from css
