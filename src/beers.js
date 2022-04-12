const beerContainer = document.createElement("div");
beerContainer.classList.add("beers-container");

export function displayBeerContainer() {

    fillBeerContainer();
    return beerContainer;
}

function fillBeerContainer() {
    beerContainer.append(createBeerCard("Heineken", "Lager", "5%"));
    beerContainer.append(createBeerCard("Stella", "Piss", "4.6%"));
    beerContainer.append(createBeerCard("Stone IPA", "IPA", "7%"));
}

export function createBeerCard(beerName, beerType, beerStrength) {
    const beerCard = document.createElement("div");

    const beerNameContainer = document.createElement("h3");
    const beerTypeContainer = document.createElement("p");
    const beerStrengthContainer = document.createElement("p");

    beerNameContainer.textContent = beerName;
    beerTypeContainer.textContent = beerType;
    beerStrengthContainer.textContent = beerStrength;

    beerCard.classList.add("beer-card");

    beerCard.append(beerNameContainer, beerTypeContainer, beerStrengthContainer);
    
    return beerCard;
}