import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
childMessage="hello from child"
showMessage(){
  //window . pattukunte emoji vastdi
  alert ("hello 👋 child called from parent")
}
}
