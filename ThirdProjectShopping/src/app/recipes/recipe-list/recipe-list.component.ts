import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {  
// @Output() SelectedRecipe = new EventEmitter<Recipe>();
recipes!: Recipe[]; 
constructor(private recipesService: RecipesService){}

ngOnInit(){
this.recipes = this.recipesService.getRecipes();
}
}
