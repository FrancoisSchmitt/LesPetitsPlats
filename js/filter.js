export class Filters {
    constructor(recipes) {
        this.recipes = recipes;
        console.log(this.recipes)
    }
    getIngredients() {
        const divOfListButton = document.querySelector(".button-list");

        const ingredient = document.createElement("div");
        ingredient.classList.add("ingredient");

        const ulOfIngredient = document.createElement("ul");
        ulOfIngredient.classList.add("list-ingredient");
        ulOfIngredient.style.display = "none";

        const inputOfIngredient = document.createElement("input");
        inputOfIngredient.placeholder = "Rechercher un ingrédient";
        inputOfIngredient.style.display = "none";

        const div = document.createElement("div");
        div.classList.add("input-ingredient");

        const iconUp = document.createElement('i');
        iconUp.classList.add("fa-solid", "fa-angle-up");
        iconUp.style.display = "none"

        const buttonOfIngredient = document.createElement("button");
        buttonOfIngredient.classList.add("btn");
        buttonOfIngredient.setAttribute('id', 'ingredient');
        buttonOfIngredient.textContent = "Ingrédient";
        buttonOfIngredient.style.display = "flex";

        const icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-angle-down");


        buttonOfIngredient.appendChild(icon)
        divOfListButton.appendChild(ingredient);
        ingredient.appendChild(buttonOfIngredient);
        ingredient.appendChild(div);
        div.appendChild(inputOfIngredient)
        div.appendChild(iconUp)


        let ingredients = [];
        this.recipes.forEach(recipe => {
            recipe.ingredients.forEach(e => {
                ingredients.push(e.ingredient);
            });
        });
        let newIngredient = this.deleteAllDuplicates(ingredients);
        newIngredient.forEach(e => {
            const listOfIngredient = document.createElement("li");
            listOfIngredient.classList.add("ingredient-Tag");
            listOfIngredient.textContent = e;
            ulOfIngredient.appendChild(listOfIngredient);
        })
        buttonOfIngredient.addEventListener("click", (e) => {
            if (ulOfIngredient.style.display && inputOfIngredient.style.display && iconUp.style.display == "none") {
                buttonOfIngredient.style.display = "none";
                ulOfIngredient.style.display = "grid";
                iconUp.style.display = "flex"
                inputOfIngredient.style.display = "flex";
            }
            else {
                ulOfIngredient.style.display = "none";
                inputOfIngredient.style.display = "none";
            }
        })

        iconUp.addEventListener("click", (e) => {
            if (buttonOfIngredient.style.display == "none") {
                buttonOfIngredient.style.display = "flex";
                ulOfIngredient.style.display = "none";
                iconUp.style.display = "none"
                inputOfIngredient.style.display = "none";
            }
        });

        ingredient.appendChild(ulOfIngredient);
        return ingredients
    }

    getAppliances() {
        /**
         *  Create element HTML with javascript. 
         */
        const divOfListButton = document.querySelector(".button-list")

        const appliances = document.createElement("div")
        appliances.classList.add("appliance");

        const buttonOfAppliance = document.createElement("button");
        buttonOfAppliance.classList.add("btn")
        buttonOfAppliance.setAttribute('id', 'Appliance');
        buttonOfAppliance.textContent = "Appareil"


        const icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-angle-down");


        buttonOfAppliance.appendChild(icon)

        const inputOfAppliance = document.createElement("input")
        inputOfAppliance.placeholder = "Rechercher un appareil"
        inputOfAppliance.style.display = "none"

        const div = document.createElement("div");
        div.classList.add("input-appliance");

        const iconUp = document.createElement('i');
        iconUp.classList.add("fa-solid", "fa-angle-up");
        iconUp.style.display = "none"

        const ulOfAppliance = document.createElement("ul")
        ulOfAppliance.classList.add("list-appliance");
        ulOfAppliance.style.display = "none"

        divOfListButton.appendChild(appliances)
        appliances.appendChild(buttonOfAppliance)
        appliances.appendChild(div);
        div.appendChild(inputOfAppliance)
        div.appendChild(iconUp)
        /**
         * create an array and do foreach to get the data that are in the object data/recipe.js
         */
        let appliance = [];
        this.recipes.forEach(recipe => {
            appliance.push(recipe.appliance)
        });
        /**
         *  delete all the duplicates and redo a foreach to display all our elements in the list
         */
        let newAppliance = this.deleteAllDuplicates(appliance)
        // newAppliance == this.sortByName();
        console.log(newAppliance)
        newAppliance.forEach(e => {
            const liOfAppliance = document.createElement("li");
            liOfAppliance.classList.add("appliance-Tag");
            liOfAppliance.textContent = e
            ulOfAppliance.appendChild(liOfAppliance)
        })
        /**
         * when you click on the button it is hidden and displays the input and the appliance list
         */
        buttonOfAppliance.addEventListener("click", (e) => {
            if (ulOfAppliance.style.display && inputOfAppliance.style.display && iconUp.style.display == "none") {
                buttonOfAppliance.style.display = "none"
                ulOfAppliance.style.display = "grid"
                iconUp.style.display = "flex"
                inputOfAppliance.style.display = "flex"
            }
            else {
                ulOfAppliance.style.display = "none"
                inputOfAppliance.style.display = "none"
            }
        })

        iconUp.addEventListener("click", (e) => {
            if (buttonOfAppliance.style.display == "none") {
                buttonOfAppliance.style.display = "flex";
                ulOfAppliance.style.display = "none";
                iconUp.style.display = "none"
                inputOfAppliance.style.display = "none";
            }
        });
        appliances.appendChild(ulOfAppliance)
        return appliance
    }

    getUstensils() {
        /**
         *  Create element HTML with javascript. 
         */
        const divOfListButton = document.querySelector(".button-list");

        const ustensil = document.createElement("div");
        ustensil.classList.add("ustensil")

        const buttonOfUstensils = document.createElement("button");
        buttonOfUstensils.classList.add("btn");
        buttonOfUstensils.setAttribute('id', 'Ustensil');
        buttonOfUstensils.textContent = "Ustensils";


        const icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-angle-down");


        buttonOfUstensils.appendChild(icon)

        const inputOfUstensils = document.createElement("input");
        inputOfUstensils.placeholder = "Rechercher un ustensils";
        inputOfUstensils.style.display = "none";


        const iconUp = document.createElement('i');
        iconUp.classList.add("fa-solid", "fa-angle-up");
        iconUp.style.display = "none"

        const div = document.createElement("div");
        div.classList.add("input-ustensil")


        const ulUstensil = document.createElement("ul");
        ulUstensil.classList.add("list-ustensil");
        ulUstensil.style.display = "none";

        divOfListButton.appendChild(ustensil);
        ustensil.appendChild(buttonOfUstensils);
        ustensil.appendChild(div);
        div.appendChild(inputOfUstensils)
        div.appendChild(iconUp)
        /**
         * create an array and do foreach to get the data that are in the object data/recipe.js
         */
        let ustensils = [];
        this.recipes.forEach(recipe => {
            recipe.ustensils.forEach(e => {
                ustensils.push(e);
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
        /**
         * when you click on the button it is hidden and displays the input and the ustensil list
         */
        buttonOfUstensils.addEventListener("click", (e) => {
            if (ulUstensil.style.display && inputOfUstensils.style.display && iconUp.style.display == "none") {
                buttonOfUstensils.style.display = "none";
                ulUstensil.style.display = "grid";
                iconUp.style.display = "flex"
                inputOfUstensils.style.display = "flex";
            }
            else {
                ulUstensil.style.display = "none";
                inputOfUstensils.style.display = "none";
            }
        })


        iconUp.addEventListener("click", (e) => {
            if (buttonOfUstensils.style.display == "none") {
                buttonOfUstensils.style.display = "flex";
                ulUstensil.style.display = "none";
                iconUp.style.display = "none"
                inputOfUstensils.style.display = "none";
            }
        });

        ustensil.appendChild(ulUstensil)
        return ustensils
    }



    deleteAllDuplicates(arrTwo) {
        const filteredArray = arrTwo.filter(function (ele, pos) {
            return arrTwo.indexOf(ele) == pos;
        })
        return filteredArray;
    }

}