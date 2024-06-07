import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { IngredientService } from '../../shared/ingredient.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
recipe :Recipe|any; 
constructor( 
  private router:ActivatedRoute,
private recipesService:RecipesService,
public ingService:IngredientService){
  // console.log(this.recipe);
  
}

ngOnInit(): void {
  const id = +this.router.snapshot.params['id'];
  this.router.params.subscribe(
    (param:Params) => {
      this.recipe = this.recipesService.getRecipesByIndex(+param['id']);
    }
  )
}


}
