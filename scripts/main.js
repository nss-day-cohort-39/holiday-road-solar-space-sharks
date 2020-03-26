import { getAttractions } from "./attractions/attractionProvider.js";
import { getFoods } from "./foods/foodProvider.js";
import { getParks } from "./parks/parkProvider.js";
import { Welcome } from "./homePage/Welcome.js";
import { RenderParksSelect } from "./parks/RenderParksSelect.js";

//fetch the data from our local parks API, then render the drop-down menu with the list of parks
getParks().then(RenderParksSelect)

getAttractions()
getFoods()

//load the welcome components into the welcomeContainer on the DOM
Welcome()