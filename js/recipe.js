import { Recipe } from "./template/tempRecipe.js";

export class Recipes {
    constructor(recipes) {
        this.recipes = recipes;
        this.Newrecipe();
    }
    Newrecipe() {
        const allRecipeNew = document.querySelector(".all-recipes");
        allRecipeNew.innerHTML = "";
        this.recipes.forEach(element => {
            const recipeDOM = new Recipe(element);
            allRecipeNew.appendChild(recipeDOM.createRecipe());
        });
    }
}