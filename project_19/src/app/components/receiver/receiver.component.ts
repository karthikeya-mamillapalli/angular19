import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule,MatButtonModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
@Input() baby:any
@Output() reply=new EventEmitter()
replyMessage(){
this.reply.emit('ahh child message');
}
}
