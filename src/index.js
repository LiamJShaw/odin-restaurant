import './styles.css';
import { displayBeerContainer } from './beers.js';
import { displayAboutContainer } from './about.js';

const mainContentContainer = document.querySelector(".main");

const homeButton = document.querySelector(".logo");

homeButton.addEventListener("click", () => {
    mainContentContainer.innerHTML = "";
    mainContentContainer.appendChild(displayAboutContainer());    
})

const buttonContainer = document.querySelector(".buttons");

buttonContainer.addEventListener("click", e => {
    
    let button = e.target.id;

    switch (button) {

        case "beers":
            console.log("beers");
            mainContentContainer.innerHTML = "";
            mainContentContainer.appendChild(displayBeerContainer());
            break;

        case "cocktails":
            console.log("cocktails");
            break;

        case "food":
            console.log("food");
            break;              
    }
})

// For first load. Do this properly.
mainContentContainer.appendChild(displayAboutContainer());  
