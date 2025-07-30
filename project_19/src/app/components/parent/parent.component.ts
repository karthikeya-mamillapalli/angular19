import { AfterViewInit, ChangeDetectorRef, Component,ComponentRef,EnvironmentInjector,Injector,ViewChild, ViewContainerRef,inject } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { TopicComponent } from '../topic/topic.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent,CommonModule,TopicComponent,MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {
 topicName='view child with component reference';

  // callChildMethod(){
// this.childComp.showMessage()
// }
    @ViewChild('childHost', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  childRef! :ComponentRef<ChildComponent>;


 private injector=inject(Injector)
 private envInjector=inject(EnvironmentInjector)


 msgTochild='this message is sent from parent'
 childMessage:any;
constructor(private cdr:ChangeDetectorRef){

}
ngAfterViewInit(): void {
  this.childRef=this.vcr.createComponent(ChildComponent,
    {environmentInjector:this.envInjector,injector:this.injector});
    this.childRef.setInput('message',this.msgTochild);
    this.childMessage=this.childRef?.instance?.childMessage;
    this.cdr.detectChanges()
}
callChild(){
this.childRef?.instance?.showMessage();
}
}
