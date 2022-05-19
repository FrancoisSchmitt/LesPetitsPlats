import { recipes } from "../../data/recipes.js";
import { Recipes } from "../utils/recipe.js"
import { ingredienTag } from "../utils/add-newtag.js";
import { ustensilTag } from "../utils/add-newtag.js";
import { applianceTag } from "../utils/add-newtag.js";
import { Filters } from "../template/render-list.js";

let newTagTabRecipes = recipes;
let recipeSearch = recipes;
let recipeFilter = recipes;

function findTheTitle(recipes, data) {
    return recipes.name.toLowerCase().includes(data)
}

function findTheDesc(recipes, data) {
    return recipes.description.toLowerCase().includes(data)
}

function findTheAppliance(recipes, data) {
    return recipes.appliance.toLowerCase().includes(data)
}

function findTheIng(recipes, data) {
    return recipes.ingredients.some(element => {
        return element.ingredient.toLowerCase().includes(data)
    })
}

function findTheUstensil(recipes, data) {
    return recipes.ustensils.some(element => {
        return element.toLowerCase().includes(data)
    })
}



function searchBarMatch(inputSearch, recipes) {
    /**
     * test de toutes mes fonction de recherche findThe... mais ne garder que celle qui gere les titres, la desc, et les ingrédients
     */
    const foundTitle = findTheTitle(recipes, inputSearch);
    const foundDesc = findTheDesc(recipes, inputSearch);
    const foundIng = findTheIng(recipes, inputSearch)
    // const foundAppliance = findTheAppliance(recipes, inputSearch)
    // const foundUstensil = findTheUstensil(recipes, inputSearch)
    if (foundTitle || foundDesc || foundIng == true) {
        return true;
    }
    else {
        return false;
    }
}

function matchTagAlgo(newfilterTag) {
    const filterTag = newfilterTag.getAttribute("data-tag");
    newfilterTag = newfilterTag.innerText.toLowerCase();
    switch (filterTag) {
        case "ingredients":
            newTagTabRecipes = newTagTabRecipes.filter(element => {
                const matchTag = findTheIng(element, newfilterTag);
                if (matchTag == true) {
                    return true;
                }
            });
            break;
        case "ustensil":
            newTagTabRecipes = newTagTabRecipes.filter(element => {
                const match = findTheUstensil(element, newfilterTag);
                if (match == true) {
                    return true;
                }
            });
            break;
        case "appliance":
            newTagTabRecipes = newTagTabRecipes.filter(element => {
                const matchTag = findTheAppliance(element, newfilterTag);
                if (matchTag == true) {
                    return true;
                }
            });
            break;
    }
}

export function searchBarAlgo() {
    const searchBarInput = document.querySelector("#search").value.toLowerCase();
    const AllTagFilters = Array.from(document.querySelectorAll(".addTag button"));
    const lstIng = document.querySelector(".list-ingredient");
    lstIng.innerHTML = ""
    const lstApli = document.querySelector(".list-appliance");
    lstApli.innerHTML = ""
    const lstUst = document.querySelector(".list-ustensil");
    lstUst.innerHTML = ""
    if (searchBarInput.length > 3) {
        recipeSearch = recipeFilter.filter(element => {
            const match = searchBarMatch(searchBarInput, element);
            if (match == true) {
                return element;
            }
        });
        if (recipeSearch.length > 0) {
            new Recipes(recipeSearch);
            newFiltersList(recipeSearch);
        }
        else {
            const newResultErrorOfRecipes = document.querySelector(".all-recipes")
            newResultErrorOfRecipes.innerHTML = `<div class="error-recipe">Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc...</div>`;
        }
        newTagTabRecipes = recipeSearch;
    }
    else if (searchBarInput.length < 3 && AllTagFilters.length === 0) {
        new Recipes(recipes);
        newFiltersList(recipes);
        newTagTabRecipes = recipes;
        recipeSearch = recipes;
    }
    else {
        tagFilterAlgo();
        recipeSearch = recipes;
        newTagTabRecipes = recipes;
    }
}

export function tagFilterAlgo() {
    const allTagsFilters = Array.from(document.querySelectorAll(".addTag button"));
    const lstIng = document.querySelector(".list-ingredient");
    lstIng.innerHTML = ""
    const lstApli = document.querySelector(".list-appliance");
    lstApli.innerHTML = ""
    const lstUst = document.querySelector(".list-ustensil");
    lstUst.innerHTML = ""
    console.log(allTagsFilters)
    if (allTagsFilters.length > 0) {
        allTagsFilters.forEach(alltagFitltered => {
            matchTagAlgo(alltagFitltered);
        });
        new Recipes(newTagTabRecipes);
        newFiltersList(newTagTabRecipes);
        recipeFilter = newTagTabRecipes;
        newTagTabRecipes = recipeSearch;

    }
    else {
        recipeFilter = recipes
        searchBarAlgo();
    }
}

function newFiltersList(recipes) {
    const filtersList = new Filters(recipes);
    const ingredients = filtersList.getIngredients();
    const appliances = filtersList.getAppliances();
    const ustensils = filtersList.getUstensils();
    ingredienTag()
    ustensilTag()
    applianceTag()
}
