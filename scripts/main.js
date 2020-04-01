
import { Welcome } from './homePage/Welcome.js'
import './parks/ParkSelectComponent.js'
import './AppController.js'
import './itineraries/MyTripView.js'
import { RenderMyTripViewContainers } from './itineraries/MyTripView.js'
import './foods/FoodSelectComponent.js'
import './attractions/AttractionSelectComponent.js'
import './itineraries/SavedTripsList.js'
import './weather/weatherProvider.js'
import './weather/WeatherComponent.js'

//load the welcome components into the welcomeContainer on the DOM
Welcome()

//renders the three sections inside of previewContainer on the DOM
RenderMyTripViewContainers()
