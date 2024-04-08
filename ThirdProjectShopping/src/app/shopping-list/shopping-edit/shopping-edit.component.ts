import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() newIndt = new EventEmitter<Ingredient>();

  @ViewChild('name')
  name!: ElementRef;

  @ViewChild('amount')
  amt!: ElementRef;

addIn(){
  const n= this.name.nativeElement.value;
  const am=this.amt.nativeElement.value;
  const ing = new Ingredient(n,am);
  this.newIndt.emit(ing);
}
}
