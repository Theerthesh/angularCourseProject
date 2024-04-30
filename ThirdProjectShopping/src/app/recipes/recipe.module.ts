import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingredent:Ingredient[];

    constructor(name: string, desc: string,imagePath: string,ing:Ingredient[]){
        this.name = name;
        this.description =desc;
        this.imagePath = imagePath;
        this.Ingredent = ing;
    }
}