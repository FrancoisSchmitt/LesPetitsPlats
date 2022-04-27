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
                console.log(ingTag)
                const close = document.createElement("img");
                close.classList.add("close-tag")
                close.src = "./assets/svg/close.svg";
                const labelOfIngredient = document.createElement("button");
                labelOfIngredient.classList.add("tag", "ingredientTag")
                labelOfIngredient.textContent = ingTag.textContent;
                addNewTag.appendChild(labelOfIngredient)
                labelOfIngredient.appendChild(close);

            });
        });

        applianceTag.forEach(appTag => {
            appTag.addEventListener("click", (e) => {
                const close = document.createElement("img");
                close.classList.add("close-tag")
                close.src = "./assets/svg/close.svg";
                console.log(appTag)
                const labelOfAppliance = document.createElement("button");
                labelOfAppliance.classList.add("tag", "applianceTag")
                labelOfAppliance.textContent = appTag.textContent;
                addNewTag.appendChild(labelOfAppliance)
                labelOfAppliance.appendChild(close);
            });
        });

        ustensilTag.forEach(usteTag => {
            usteTag.addEventListener("click", (e) => {
                const close = document.createElement("img");
                close.classList.add("close-tag")
                close.src = "./assets/svg/close.svg";
                console.log(usteTag)
                const labelOfUstensil = document.createElement("button");
                labelOfUstensil.classList.add("tag", "ustensilTag")
                labelOfUstensil.textContent = usteTag.textContent;
                addNewTag.appendChild(labelOfUstensil)
                labelOfUstensil.appendChild(close);
            });
        });

        addNewTag.addEventListener("click", this.removeTag)
    }

    removeTag(e) {
        let element = e.target.parentNode;
        element.parentNode.removeChild(element);
    }
}