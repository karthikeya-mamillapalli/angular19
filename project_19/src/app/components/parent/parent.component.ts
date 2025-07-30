import { Component,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { TopicComponent } from '../topic/topic.component';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent,CommonModule,TopicComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComp! :ChildComponent
topicName='view child with component reference';
callChildMethod(){
this.childComp.showMessage()
}
}
