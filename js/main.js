import { recipes } from "../data/recipes.js";
import { Recipes } from "./utils/recipe.js";
import { Filters } from "./template/render-list.js";
// import { Tags } from "./tag.js";
import { ingredienTag } from "./utils/add-newtag.js";
import { ustensilTag } from "./utils/add-newtag.js";
import { applianceTag } from "./utils/add-newtag.js";

import { Searchbar } from "./utils/searchBar.js"

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