export class Tags {
    constructor(recipes) {
        this.recipes = recipes;
    }

    addTag() {
        const addNewTag = document.querySelector(".addTag");
        const ingredientTag = document.querySelectorAll(".ingredient-Tag");
        const applianceTag = document.querySelectorAll(".appliance-Tag");
        const ustensilTag = document.querySelectorAll(".ustensil-Tag");

        ingredientTag.forEach(ingTag => {
            ingTag.addEventListener("click", (e) => {

                const close = document.createElement("img");
                close.classList.add("close-tag")
                close.src = "./assets/svg/close.svg";
                close.addEventListener("click", this.removeTag)

                const buttonOfIngredient = document.createElement("button");
                buttonOfIngredient.classList.add("tag", "ingredientTag")
                buttonOfIngredient.textContent = ingTag.textContent;


                addNewTag.appendChild(buttonOfIngredient)
                buttonOfIngredient.appendChild(close);

            });
        });

        applianceTag.forEach(appTag => {
            appTag.addEventListener("click", (e) => {
                const close = document.createElement("img");
                close.classList.add("close-tag")
                close.src = "./assets/svg/close.svg";
                close.addEventListener("click", this.removeTag)

                const buttonOfAppliance = document.createElement("button");
                buttonOfAppliance.classList.add("tag", "applianceTag")
                buttonOfAppliance.textContent = appTag.textContent;

                addNewTag.appendChild(buttonOfAppliance)
                buttonOfAppliance.appendChild(close);
            });
        });

        ustensilTag.forEach(usteTag => {
            usteTag.addEventListener("click", (e) => {
                const close = document.createElement("img");
                close.addEventListener("click", this.removeTag)
                close.classList.add("close-tag")
                close.src = "./assets/svg/close.svg";

                const buttonOfUstensils = document.createElement("button");
                buttonOfUstensils.classList.add("tag", "ustensilTag")
                buttonOfUstensils.textContent = usteTag.textContent;

                addNewTag.appendChild(buttonOfUstensils)
                buttonOfUstensils.appendChild(close);
            });
        });

    }

    removeTag(e) {
        let element = e.target.parentNode;
        console.log(e.target)
        element.parentNode.removeChild(element);
    }
}