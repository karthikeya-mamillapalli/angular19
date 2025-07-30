import { Component,signal,input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //using normal way
// childMessage="hello from child"
// showMessage(){
//   //window . pattukunte emoji vastdi
//   alert ("hello 👋 child called from parent")
// }

//this is using signals 
message=input<string>('')
childMessage='this is child message'

showMessage(){
  alert('child says ' + this.message())
}
}
