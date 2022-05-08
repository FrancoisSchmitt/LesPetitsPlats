import { recipes } from "../../data/recipes.js";
import { Recipes } from "../recipe.js"
// import { Tags } from "../tag.js";


// const mainRecipes = recipes;

let newTagTabRecipes = recipes;
let recipeSearch = recipes;
export function searchBarAlgo() {
    const inputSearch = document.querySelector("#search").value.toLowerCase();
    const allTagsFilters = Array.from(document.querySelectorAll(".addTag button"));
    /**
     * ajouté le filtre par tag pour que les deux fonctionne ensemble 
     */
    if (inputSearch.length >= 3) {
        recipeSearch = recipeSearch.filter(element => {
            const ifSearchBarMatch = searchBarMatch(inputSearch, element);
            if (ifSearchBarMatch === true) {
                console.log(element)
                return element;
            }
        });
        if (recipeSearch.length >= 3) {
            new Recipes(recipeSearch);
        }
        else {
            const newResultErrorOfRecipes = document.querySelector(".all-recipes");
            newResultErrorOfRecipes.textContent = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc...";
        }
    }
    else if (inputSearch.length < 3) {
        newTagTabRecipes = recipes;
        recipeSearch = recipes
        new Recipes(recipes)
    }


    else {
        tagFilterAlgo();
    }
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
    if (foundTitle || foundDesc || foundIng === true) {
        return true;
    }
    else {
        return false;
    }
}



export function tagFilterAlgo() {
    const allTagsFilters = Array.from(document.querySelectorAll(".addTag button"));

    console.log(allTagsFilters)
    if (allTagsFilters.length != 0) {
        allTagsFilters.forEach(alltagFitltered => {
            matchTagAlgo(alltagFitltered);
        });
        new Recipes(newTagTabRecipes);
        newTagTabRecipes = newTagTabRecipes
        console.log(newTagTabRecipes)
    }

    else if (allTagsFilters.length === 0) {
        new Recipes(recipes)
    }

    // else {
    //     searchBarAlgo();
    // }
}

function matchTagAlgo(dataTag) {
    const filterTag = dataTag.getAttribute("data-tag");
    dataTag = dataTag.innerText.toLowerCase();
    switch (filterTag) {
        case "ingredients":
            newTagTabRecipes = newTagTabRecipes.filter(element => {
                const matchTag = findTheIng(element, dataTag);
                if (matchTag == true) {
                    return true;
                }
            });
            break;
        case "ustensil":
            newTagTabRecipes = newTagTabRecipes.filter(element => {
                const match = findTheUstensil(element, dataTag);
                if (match == true) {
                    return true;
                }
            });
            break;
        case "appliance":
            newTagTabRecipes = newTagTabRecipes.filter(element => {
                const matchTag = findTheAppliance(element, dataTag);
                if (matchTag == true) {
                    return true;
                }
            });
            break;
    }
}


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



/**
 * faire un switch pour les ingredients / ustensil / appliance
 */

/**
 * switch (){
 *
 *
    * case 'ingredient'
 * DoSomething
    * break
 *
    * case 'ustensil'
 * DoSomething
    * break
 *
    * case 'appliance'
 * DoSomething
    * break
 * }
 */






/**
 * crée une fonction de findING/ findUstensil / findAPpliance
 */

/**
 * findUstensil(recipes, data)
 *
    * return recipes....(some)...
     * return .... inc(data)....
 */

/**
 * findAppliance(recipes, data)
 *
    * return recipes....(some)...
     * return .... inc(data)....
 */