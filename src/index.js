import './styles.css';
import { displayCocktailContainer } from './cocktails.js';
import { displayBeerContainer } from './beers.js';
import { displayAboutContainer } from './about.js';

const mainContentContainer = document.querySelector(".main");

const buttonContainer = document.querySelector(".buttons");

buttonContainer.addEventListener("click", e => {
    
    let button = e.target.id;

    switch (button) {

        case "beers":
            console.log("beers");
            mainContentContainer.innerHTML = "";
            mainContentContainer.appendChild(displayBeerContainer());

            // Keep button active to show user current page
            clearActiveButtons();
            e.target.classList.add("active");
            break;

        case "cocktails":
            console.log("cocktails");
            mainContentContainer.innerHTML = "";
            mainContentContainer.appendChild(displayCocktailContainer());

            // Keep button active to show user current page
            clearActiveButtons();
            e.target.classList.add("active");
            break;

        case "food":
            console.log("food");
            mainContentContainer.innerHTML = "";

            // Keep button active to show user current page
            clearActiveButtons();
            e.target.classList.add("active");
            break;              
    }
})

function clearActiveButtons() {
    buttonContainer.childNodes.forEach(button => {

        // I'm not sure why this 1 is a button. I feel like there's an infinitely better way to do this.
        if (button.nodeType === 1) {
            button.classList.remove("active");
        }
    })
}

const homeButton = document.querySelector(".logo");

homeButton.addEventListener("click", () => {
    mainContentContainer.innerHTML = "";
    clearActiveButtons();
    mainContentContainer.appendChild(displayAboutContainer());    
})

// For first load. Do this properly. How?
mainContentContainer.appendChild(displayAboutContainer());  
