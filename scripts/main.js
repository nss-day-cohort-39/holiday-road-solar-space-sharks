import { getAttractions } from "./attractions/attractionProvider.js";
import { getFoods } from "./foods/foodProvider.js";
import { getParks } from "./parks/parkProvider.js";
import { Welcome } from "./homePage/Welcome.js";
import { RenderParksSelectComponent } from "./parks/ParkSelectComponent.js";
import "./AppController.js";
import "./itineraries/MyTripView.js"
import { RenderMyTripViewContainers } from "./itineraries/MyTripView.js";
import { RenderAttractionsSelectComponent } from "./attractions/AttractionSelectComponent.js";
import "./attractions/AttractionSelectDropdown.js"
import { RenderFoodSelectComponent } from "./foods/FoodSelectComponent.js";
//fetch the data from our local parks API, then render the drop-down menu with the list of parks
getParks().then(RenderParksSelectComponent)
    .then(getFoods)
    .then(RenderFoodSelectComponent)
    .then(getAttractions)
    .then(RenderAttractionsSelectComponent)


//load the welcome components into the welcomeContainer on the DOM
Welcome()

//renders the three sections inside of previewContainer on the DOM
RenderMyTripViewContainers()
