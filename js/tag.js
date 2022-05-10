
import { tagFilterAlgo } from "./algo/algo.js";




const addNewTag = document.querySelector(".addTag");

export function ingredienTag() {
    const ingredientTag = document.querySelectorAll(".ingredient-Tag");
    ingredientTag.forEach(ingTag => {
        ingTag.addEventListener("click", (e) => {
            const close = document.createElement("img");
            console.log(ingTag)
            close.classList.add("close-tag")
            close.src = "./assets/svg/close.svg";


            const buttonOfIngredient = document.createElement("button");
            buttonOfIngredient.classList.add("tag", "ingredientTag")
            buttonOfIngredient.textContent = ingTag.textContent;
            buttonOfIngredient.dataset.tag = "ingredients"

            addNewTag.appendChild(buttonOfIngredient)
            buttonOfIngredient.appendChild(close);
            close.addEventListener("click", removeTag)
            tagFilterAlgo();

        });
    });
}

export function applianceTag() {
    const applianceTag = document.querySelectorAll(".appliance-Tag");

    applianceTag.forEach(appTag => {
        appTag.addEventListener("click", (e) => {
            const close = document.createElement("img");
            close.classList.add("close-tag")
            close.src = "./assets/svg/close.svg";

            const buttonOfAppliance = document.createElement("button");
            buttonOfAppliance.classList.add("tag", "applianceTag")
            buttonOfAppliance.textContent = appTag.textContent;
            buttonOfAppliance.dataset.tag = "appliance"

            addNewTag.appendChild(buttonOfAppliance)
            buttonOfAppliance.appendChild(close);
            tagFilterAlgo();
            close.addEventListener("click", removeTag)
        });
    });

}

export function ustensilTag() {
    const ustensilTag = document.querySelectorAll(".ustensil-Tag");
    ustensilTag.forEach(usteTag => {
        usteTag.addEventListener("click", (e) => {
            const close = document.createElement("img");
            close.classList.add("close-tag")
            close.src = "./assets/svg/close.svg";

            const buttonOfUstensils = document.createElement("button");
            buttonOfUstensils.classList.add("tag", "ustensilTag")
            buttonOfUstensils.textContent = usteTag.textContent;
            buttonOfUstensils.dataset.tag = "ustensil"

            addNewTag.appendChild(buttonOfUstensils)
            buttonOfUstensils.appendChild(close);
            tagFilterAlgo();
            close.addEventListener("click", removeTag)

        });
    });

}



function removeTag(e) {
    let element = e.target.parentNode;
    console.log(element)
    element.parentNode.removeChild(element);
    tagFilterAlgo();
}




