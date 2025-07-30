import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output,input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule,MatButtonModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
  //below is normal way 
// @Input() baby:any
//this is using signal
baby= input<string>()
@Output() reply=new EventEmitter()
replyMessage(){
this.reply.emit('ahh child message');
}
}
