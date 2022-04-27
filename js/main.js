import { recipes } from "../data/recipes.js";
import { Recipe } from "./template/tempRecipe.js";
import { Filters } from "./filter.js";
import { Tags } from "./tag.js";


class mainApp {
    static init() {
        new mainApp(recipes);
    }
    constructor(recipes) {
        this.recipes = recipes;
        this.launchRecipes();
        this.launchFilters();
        this.launchTag();
    }
    launchRecipes() {
        const resultSection = document.querySelector(".all-recipes");
        resultSection.innerHTML = "";
        this.recipes.forEach(element => {
            const recipeDOM = new Recipe(element);
            resultSection.appendChild(recipeDOM.createRecipe());
        });
    }
    launchFilters() {
        const listFilter = new Filters(this.recipes);
        listFilter.getIngredients();
        listFilter.getAppliances();
        listFilter.getUstensils();
    }

    launchTag() {
        const tag = new Tags(this.recipes)
        tag.addTag();
    }
}

mainApp.init();