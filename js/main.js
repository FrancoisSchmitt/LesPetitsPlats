import { recipes } from "../data/recipes.js";
import { Recipes } from "./recipe.js";
import { Filters } from "./filter.js";
// import { Tags } from "./tag.js";
import { ingredienTag } from "./tag.js";
import { ustensilTag } from "./tag.js";
import { applianceTag } from "./tag.js";

import { Searchbar } from "./searchBar.js"

class App {
    static init() {
        new App(recipes);
    }
    constructor(recipes) {
        this.recipes = recipes;
        this.launchSearchBar();
        this.launchFilters();
        this.launchRecipes();

        this.launchTag();
    }

    launchSearchBar() {
        new Searchbar();
    }

    launchFilters() {
        const filtersList = new Filters(this.recipes);
        filtersList.getIngredients();
        filtersList.getAppliances();
        filtersList.getUstensils();

    }

    launchTag() {
        const ingTag = new ingredienTag();
        const appTag = new applianceTag();
        const ustTag = new ustensilTag();

    }
    launchRecipes() {
        new Recipes(this.recipes);
    }
}

App.init();