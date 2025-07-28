import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
fruits=['apple','mango','banana'];
items=['one','two','three'];

products=[
  {id:1,name:'Laptop',inStock:true},
  {id:2,name:'Phone',inStock:true},
  {id:3,name:'Mouse',inStock:false},
  {id:4,name:'Keyboard',inStock:true},
  {id:5,name:'jaffa',inStock:false}

]
}
