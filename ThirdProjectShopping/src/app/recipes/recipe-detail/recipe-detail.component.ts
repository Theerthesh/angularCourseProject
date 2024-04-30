import { Component, Injectable, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { IngredientService } from '../../shared/ingredient.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
@Input() recipe :Recipe|any; 
constructor(public ingService:IngredientService){
  // console.log(this.recipe);
  
}



}
