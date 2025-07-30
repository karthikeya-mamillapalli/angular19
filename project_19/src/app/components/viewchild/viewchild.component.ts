import { CommonModule } from '@angular/common';
import { Component ,ViewChild,ElementRef,signal} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TopicComponent } from '../topic/topic.component';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-viewchild',
  imports: [CommonModule, MatFormFieldModule,TopicComponent,MatInput,MatButtonModule],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {
/* @ViewChild('inputValue',{ static: false }) ele!:ElementRef;
  //static ->true -->cdr available when component is initialized(ngOnInit())
  inputValueWithRef=''
getValue(el:any){
  this.inputValueWithRef=el.value
}
inputValueWithView=''
getValueViewChild(){
this.inputValueWithView=this.ele.nativeElement.value
} */


//using signals 
@ViewChild ('inputValue') ele!:ElementRef
inputValueWithRef=signal("")
inputValueWithView=signal("")

getValue(el:any){
this.inputValueWithRef.set(el.value)
}

getValueViewChild(){
  const value=this.ele?.nativeElement?.value
this.inputValueWithView.set(value)
}

}
