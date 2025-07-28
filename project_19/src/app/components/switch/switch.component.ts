import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-switch',
  imports: [MatFormFieldModule,CommonModule,MatInputModule,MatSelectModule,FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
userRole=""
userSignals=signal('')
}
