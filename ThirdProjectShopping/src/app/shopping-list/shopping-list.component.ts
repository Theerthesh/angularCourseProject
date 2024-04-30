import { Component, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from '../shared/ingredient.service';
@Injectable()
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients = this.ing.ingredients;

constructor(public ing:IngredientService){}

}
