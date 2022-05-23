/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { ingredienTag } from "../utils/add-newtag.js";
import { ustensilTag } from "../utils/add-newtag.js";
import { applianceTag } from "../utils/add-newtag.js";


export class Filters {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getIngredients() {
    const ingredient = document.querySelector(".ingredient");

    const ulOfIngredient = document.querySelector(".list-ingredient");
    ulOfIngredient.style.display = "none"

    const inputOfIngredient = document.querySelector("#search-Ingredients-List");
    inputOfIngredient.style.display = "none";

    const iconUpIng = document.querySelector(".iconUpIng");
    iconUpIng.style.display = "none"

    const buttonOfIngredient = document.querySelector("#ingredient");
    buttonOfIngredient.style.display = "flex";

    const iconIng = document.querySelector(".iconDownIng");


    let ingredients = [];
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(e => {
        ingredients.push(e.ingredient.toLowerCase());
      });
    });

    let newIngredient = this.deleteAllDuplicates(ingredients);
    newIngredient.forEach(e => {
      const listOfIngredient = document.createElement("li");
      listOfIngredient.classList.add("ingredient-Tag");
      listOfIngredient.textContent = e;
      ulOfIngredient.appendChild(listOfIngredient);
    })

    const searchInputIngredient = document.getElementById("search-Ingredients-List");
    searchInputIngredient.addEventListener("keyup", function () {
      const listContainer = document.querySelector(".list-ingredient");
      const input = searchInputIngredient.value;
      const result = newIngredient.filter(item => item.toLowerCase().includes(input.toLowerCase()));
      listContainer.innerHTML = "";
      result.forEach(resultItem => {
        const listOfIngredientFilter = document.createElement("li");
        listOfIngredientFilter.classList.add("ingredient-Tag");
        listOfIngredientFilter.textContent = resultItem;
        ulOfIngredient.appendChild(listOfIngredientFilter)
      })
      ingredienTag()
    })

    buttonOfIngredient.addEventListener("click", (e) => {
      if (ulOfIngredient.style.display && inputOfIngredient.style.display && iconUpIng.style.display == "none") {
        buttonOfIngredient.style.display = "none";
        ulOfIngredient.style.display = "grid";
        iconUpIng.style.display = "flex"
        inputOfIngredient.style.display = "flex";
      }
    })

    iconUpIng.addEventListener("click", (e) => {
      if (buttonOfIngredient.style.display == "none") {
        buttonOfIngredient.style.display = "flex";
        ulOfIngredient.style.display = "none";
        iconUpIng.style.display = "none"
        inputOfIngredient.style.display = "none";
      }
    });

    return ingredients
  }

  getAppliances() {
    /**
             *  Create element HTML with javascript. 
             */


    const appliances = document.querySelector(".appliance")

    const buttonOfAppliance = document.querySelector("#appliance");
    buttonOfAppliance.style.display = "flex"

    const iconAppl = document.querySelector('.iconDownAppl');


    const inputOfAppliance = document.querySelector("#search-Appliance-List")
    inputOfAppliance.style.display = "none"

    const iconUpAppl = document.querySelector('.iconUpAppl');
    iconUpAppl.style.display = "none"



    const ulOfAppliance = document.querySelector(".list-appliance")
    ulOfAppliance.style.display = "none"







    /**
             * create an array and do foreach to get the data that are in the object data/recipe.js
             */
    let appliance = [];
    this.recipes.forEach(recipe => {
      appliance.push(recipe.appliance.toLowerCase())
    });
    /**
             *  delete all the duplicates and redo a foreach to display all our elements in the list
             */
    let newAppliance = this.deleteAllDuplicates(appliance)
    // newAppliance == this.sortByName();
    // console.log(newAppliance)
    newAppliance.forEach(e => {
      console.log(newAppliance)
      const liOfAppliance = document.createElement("li");
      liOfAppliance.classList.add("appliance-Tag");
      liOfAppliance.textContent = e
      ulOfAppliance.appendChild(liOfAppliance)
    })
    const searchInputAppliance = document.getElementById("search-Appliance-List");

    searchInputAppliance.addEventListener("keyup", function () {
      const input = searchInputAppliance.value;
      const result = newAppliance.filter(item => item.toLowerCase().includes(input.toLowerCase()));
      const listContainer = document.querySelector(".list-appliance");
      listContainer.innerHTML = "";
      result.forEach(resultItem => {
        const listOfApplianceFilter = document.createElement("li");
        listOfApplianceFilter.classList.add("appliance-Tag");
        listOfApplianceFilter.textContent = resultItem;
        ulOfAppliance.appendChild(listOfApplianceFilter)
      })
      applianceTag();
    })
    /**
             * when you click on the button it is hidden and displays the input and the appliance list
             */
    buttonOfAppliance.addEventListener("click", (e) => {
      if (ulOfAppliance.style.display && inputOfAppliance.style.display && iconUpAppl.style.display == "none") {
        buttonOfAppliance.style.display = "none"
        ulOfAppliance.style.display = "grid"
        iconUpAppl.style.display = "flex"
        inputOfAppliance.style.display = "flex"
      }
    })

    iconUpAppl.addEventListener("click", (e) => {
      if (buttonOfAppliance.style.display == "none") {
        buttonOfAppliance.style.display = "flex";
        iconAppl.style.display = "flex"
        iconUpAppl.style.display = "none"
        inputOfAppliance.style.display = "none";
        ulOfAppliance.style.display = "none"
      }
    });
    // appliances.appendChild(ulOfAppliance)
    return appliance
  }

  getUstensils() {
    /**
             *  Create element HTML with javascript. 
             */

    // const ustensil = document.querySelector(".ustensil");


    const buttonOfUstensils = document.querySelector("#ustensil");
    buttonOfUstensils.style.display = "flex"

    const iconDownUst = document.querySelector('.iconDownUst');

    const inputOfUstensils = document.querySelector("#search-Ustensils-List");
    inputOfUstensils.style.display = "none";


    const iconUpUst = document.querySelector('.iconUpUst');
    iconUpUst.style.display = "none"

    // const div = document.querySelector(".input-ustensil");

    const ulUstensil = document.querySelector(".list-ustensil");
    ulUstensil.style.display = "none";

    /**
             * create an array and do foreach to get the data that are in the object data/recipe.js
             */
    let ustensils = [];
    this.recipes.forEach(recipe => {
      recipe.ustensils.forEach(e => {
        ustensils.push(e.toLowerCase());
      })
    });
    /**
             *  delete all the duplicates and redo a foreach to display all our elements in the list
             */
    let newUstensils = this.deleteAllDuplicates(ustensils);
    newUstensils.forEach(e => {
      const listOfUstensil = document.createElement("li");
      listOfUstensil.classList.add("ustensil-Tag");
      listOfUstensil.textContent = e;
      ulUstensil.appendChild(listOfUstensil);
    })


    const searchInputUstensils = document.getElementById("search-Ustensils-List");

    searchInputUstensils.addEventListener("keyup", function () {
      const input = searchInputUstensils.value;
      const result = newUstensils.filter(item => item.toLowerCase().includes(input.toLowerCase()));

      const listContainer = document.querySelector(".list-ustensil");
      listContainer.innerHTML = "";

      result.forEach(resultItem => {
        const listOfUstensilsFilter = document.createElement("li");
        listOfUstensilsFilter.classList.add("ustensil-Tag");
        listOfUstensilsFilter.textContent = resultItem;
        ulUstensil.appendChild(listOfUstensilsFilter)
      })
      ustensilTag();
    })
    /**
             * when you click on the button it is hidden and displays the input and the ustensil list
             */
    buttonOfUstensils.addEventListener("click", (e) => {
      if (ulUstensil.style.display && inputOfUstensils.style.display && iconUpUst.style.display == "none") {
        buttonOfUstensils.style.display = "none";
        ulUstensil.style.display = "grid";
        iconUpUst.style.display = "flex"
        inputOfUstensils.style.display = "flex";
      }
    })


    iconUpUst.addEventListener("click", (e) => {
      if (buttonOfUstensils.style.display === "none") {
        buttonOfUstensils.style.display = "flex";
        iconUpUst.style.display = "none"
        iconDownUst.style.display = "flex"
        inputOfUstensils.style.display = "none";
        ulUstensil.style.display = "none"
      }
    });


    return ustensils
  }

  deleteAllDuplicates(arrTwo) {
    const filteredArray = arrTwo.filter(function (ele, pos) {
      return arrTwo.indexOf(ele) == pos;
    })
    return filteredArray;
  }

}
