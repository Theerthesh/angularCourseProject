import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
@Output() SelectedRecipe = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A test1 Recipe','this is simple a test', 'https://www.feastingathome.com/wp-content/uploads/2020/06/larb-recipe-20-1000x1477.jpg',
      [new Ingredient('soas',2),new Ingredient('cetkap',1)]
    ),
    new Recipe('A test2 Recipe','this is simple a test', 'https://www.feastingathome.com/wp-content/uploads/2020/06/larb-recipe-20-1000x1477.jpg',
    [new Ingredient('bread',5),new Ingredient('greaps',4)]
  ),
  ];

  OnchoiseRecipe(recipe:Recipe){
this.SelectedRecipe.emit(recipe)
  }

}
