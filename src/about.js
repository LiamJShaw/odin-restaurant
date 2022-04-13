import barImage from '../img/durham.jpg';

export function displayAboutContainer() {

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container")
    
    // Is there a better way to stop the same content being loaded twice?
    aboutContainer.innerHTML = "";

    // Blurb
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info")

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.textContent = "Hiding in Reform Place, just off North Road is the oasis that is the Head of Steam. Just a stone's throw from the famous Durham Cathedral and the popular Riverwalk. We host a fantastic range of craft beer, local real ale, and beers from around the world. We also have an extensive selection of spirits and cocktails. There is no place quite like the Head of Steam.";
    p2.textContent = "The venue has a beautiful outside balcony and terrace area, which is the perfect place to enjoy your favourite tipple away from the hustle and bustle of the city. The venue has two floors, with the upstairs being the perfect place for your next function or business meeting.";
    p3.textContent = "Looking for something to eat? The Head of Steam offers a great selection of burgers, pizzas, and sharers. We also have a range of vegetarian, vegan, and gluten free options.";

    infoContainer.append(p1, p2, p3);

    // Image
    const image = new Image();
    image.src = barImage;

    aboutContainer.append(infoContainer, image);
    
    return aboutContainer;
}