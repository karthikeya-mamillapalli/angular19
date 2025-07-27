import { Component,signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [CommonModule,FormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
message=""
userName=signal("");
}
