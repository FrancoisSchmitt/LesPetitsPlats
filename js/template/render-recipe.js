/* eslint-disable eqeqeq */
export class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.ingredients = recipe.ingredients;
    this.time = recipe.time;
    this.description = recipe.description;
    this.appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
  }
  createRecipe() {
    const article = document.createElement("article");
    article.classList = "recipe";

    const a = document.createElement("a");
    a.classList.add("link-img");

    const imgs = document.createElement("img");
    imgs.src = "./assets/img/image-recipes.png";
    imgs.classList.add("image-of-recipes");

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("info-of-recipes");

    const ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredient-recipes")

    const nameOfRecipes = document.createElement("h1");
    nameOfRecipes.textContent = this.name

    const timerIcon = document.createElement("img");
    timerIcon.src = "./assets/svg/time.svg";

    const paraTime = document.createElement("p")
    paraTime.classList.add("timmer")
    paraTime.textContent = this.time + " min"


    const ingredient = document.createElement("div");


    const descRecipesDiv = document.createElement("div")
    descRecipesDiv.classList.add("name-timer")

    this.ingredients.forEach(element => {

      const ingredientOfRecipes = document.createElement("label");
      const quantityIngredient = document.createElement("p");
      ingredientOfRecipes.classList.add("ingredient-list")
      if (element.unit === "grammes") {
        element.unit = element.unit.substring(0, 1);
      }
      else if (element.unit || element.quantity === "cuillères à soupe") {
        const words = element.unit.split(' ');
        element.unit = words[0];
      }


      if (element.unit && element.quantity != undefined) {
        ingredientOfRecipes.textContent = element.ingredient + ": "
        quantityIngredient.textContent = element.quantity + " " + element.unit
        ingredient.appendChild(ingredientOfRecipes)
        ingredientOfRecipes.appendChild(quantityIngredient)
      }

      else if (element.ingredient && element.quantity != undefined) {
        ingredientOfRecipes.textContent = element.ingredient + ": "
        quantityIngredient.textContent = element.quantity
        ingredient.appendChild(ingredientOfRecipes)
        ingredientOfRecipes.appendChild(quantityIngredient)

      }
      else if (element.unit && element.quantite != undefined) {
        ingredientOfRecipes.textContent = element.ingredient + ": "
        quantityIngredient.textContent = element.quantite + element.unit
        ingredient.appendChild(ingredientOfRecipes)
        ingredientOfRecipes.appendChild(quantityIngredient)

      }
      else {
        ingredientOfRecipes.textContent = element.ingredient + ": "
        ingredient.appendChild(ingredientOfRecipes)
        ingredientOfRecipes.appendChild(quantityIngredient)

      }
    });

    const howDoRecipes = document.createElement("label")
    howDoRecipes.textContent = this.description.substring(0, 150) + "...";
    howDoRecipes.classList.add("desc-howDo")

    article.appendChild(a)
    a.appendChild(imgs)
    article.appendChild(mainDiv)
    mainDiv.appendChild(descRecipesDiv)
    mainDiv.appendChild(ingredientDiv)

    descRecipesDiv.appendChild(nameOfRecipes)
    descRecipesDiv.appendChild(paraTime)
    paraTime.appendChild(timerIcon)
    ingredientDiv.appendChild(ingredient)
    ingredientDiv.appendChild(howDoRecipes)
    return article;
  }
}
