import './styles.css';
import { displayBeerContainer } from './beers.js';

const mainContentContainer = document.querySelector(".main");

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

