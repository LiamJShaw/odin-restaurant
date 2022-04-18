const cocktailContainer = document.createElement("div");
cocktailContainer.classList.add("cocktails-container");

export function displayCocktailContainer() {
    
    // Is there a better way to stop the same content being loaded twice?
    cocktailContainer.innerHTML = "";

    fillCocktailContainer();
    return cocktailContainer;
}

function fillCocktailContainer() {
    cocktailContainer.append(createCocktailCard("Shandy", "Lager, lemonade"));
    cocktailContainer.append(createCocktailCard("Margarita", "Tequila, lime"));
    cocktailContainer.append(createCocktailCard("Mojito", "Vodka, mint, soda water"));
}

export function createCocktailCard(cocktailName, cocktailIngredients) {
    const cocktailCard = document.createElement("div");

    cocktailCard.classList.add("cocktail-card");

    const cocktailNameContainer = document.createElement("h3");
    const cocktailIngredientsContainer = document.createElement("p");

    cocktailNameContainer.textContent = cocktailName;
    cocktailIngredientsContainer.textContent = cocktailIngredients;

    cocktailCard.append(cocktailNameContainer);
    cocktailCard.append(cocktailIngredientsContainer);
    
    return cocktailCard;
}