import { Component } from '@angular/core';
import { Recipe } from './recipe.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

constructor(private router:Router){}
 
}
