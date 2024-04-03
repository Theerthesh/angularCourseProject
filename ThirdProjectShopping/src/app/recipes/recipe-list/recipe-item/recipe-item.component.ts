import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input()recipe:any;
  @Output() SelectedRecipe=new EventEmitter<Recipe>();
  
  
  OnSelectedRecipe(recipe:Recipe){
this.SelectedRecipe.emit(recipe);
  }
}
