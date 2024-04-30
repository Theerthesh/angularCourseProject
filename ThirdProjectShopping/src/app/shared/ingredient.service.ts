import { Ingredient } from "./ingredient.model";

export class IngredientService{
    ingredients:Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ];
      
      addIngt(Ing:Ingredient){
        this.ingredients.push(Ing);
      }
      
      addIngFromReciptToShopping(Ing:Ingredient[]){
        this.ingredients.push(...Ing)
      }
      
}