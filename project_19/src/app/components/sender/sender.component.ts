import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReceiverComponent } from '../receiver/receiver.component';

@Component({
  selector: 'app-sender',
  imports: [CommonModule,ReceiverComponent],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
message="hey buddy from parent"
incomingMsg=''

}
