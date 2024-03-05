import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes:Recipe[]=[
    new Recipe('A test Recipe','this is simple a test', 'https://www.feastingathome.com/wp-content/uploads/2020/06/larb-recipe-20-1000x1477.jpg')
  ];

}
