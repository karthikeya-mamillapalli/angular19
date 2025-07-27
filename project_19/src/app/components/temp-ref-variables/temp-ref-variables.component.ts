import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-temp-ref-variables',
  imports: [CommonModule,MatInputModule,MatButtonModule],
  templateUrl: './temp-ref-variables.component.html',
  styleUrl: './temp-ref-variables.component.css'
})
export class TempRefVariablesComponent {
message=""
getInputValue(value:any){
this.message=value
}
}
