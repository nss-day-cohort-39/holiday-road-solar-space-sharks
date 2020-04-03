import { useTrips, getTrips } from './savedTripsProvider.js'
import { SavedTrip } from './SavedTrip.js'
import { getFoods, useFoods } from '../foods/foodProvider.js'
import {
  getParksByParkCode,
  useParksByParkCode
} from '../parks/parkProvider.js'
import {
  getAttractions,
  useAttractions
} from '../attractions/attractionProvider.js'
import {
  getCampgroundsByPark,
  useCampgroundsByPark
} from '../campgrounds/campgroundProvider.js'
import {
  useAttractionCoords,
  getFoodCoords,
  getAttractionCoords,
  useFoodCoords
} from '../directions/coordinateProvider.js'
import {
  getDirections,
  useDirections
} from '../directions/directionsProvider.js'

const eventHub = document.querySelector('.container')

// get a reference to the trip container in the DOM
const contentTarget = document.querySelector('.savedTripsContainer')

eventHub.addEventListener('mySavedTripsBtnWasClicked', event => render())

// create a render function that renders the saved trips
const render = () => {
  getTrips().then(() => {
    const trips = useTrips()
    // iterate all trips in database.json and return a string of all Park Codes separated by a comma
    const stringOfParkCodes = trips
      .map(trip => {
        return trip.parkCode
      })
      .join(',')

    // first get Campgrounds (takes the longest) then get the rest of the data to correctly render Saved Trip Component
    getCampgroundsByPark(stringOfParkCodes)
      .then(getFoods)
      .then(getAttractions)
      .then(getParksByParkCode(stringOfParkCodes))
      .then(() => {
        contentTarget.innerHTML = `
                <h2>My Saved Trips</h2>
                ${trips.map(trip => SavedTrip(trip))}
                `
      })
      .then(() => {
        // define parks,foods, attractions, and campgrounds here in variables
        const parks = useParksByParkCode()
        const foods = useFoods()
        const attractions = useAttractions()
        const campgrounds = useCampgroundsByPark()
        let coordArray = []

        trips.forEach(tripObject => {
          //get the chosen park, food, attraction, and campground
          const chosenPark = parks.find(
            park => park.parkCode === tripObject.parkCode
          )
          const chosenFood = foods.find(food => food.id === tripObject.foodId)
          const chosenAttraction = attractions.find(
            attraction => attraction.id === tripObject.attractionId
          )
          let chosenCampground = null

          if (tripObject.campgroundId !== null) {
            chosenCampground = campgrounds.find(
              campground => parseInt(campground.id) === tripObject.campgroundId
            )
          }
          getFoodCoords(chosenFood)
          getAttractionCoords(chosenAttraction)
            .then(() => {
              const foodCoords = useFoodCoords()
              const attractionCoords = useAttractionCoords()
              coordArray = [
                [36.174465, -86.76796],
                [
                  attractionCoords.hits[0].point.lat,
                  attractionCoords.hits[0].point.lng
                ],
                [foodCoords.hits[0].point.lat, foodCoords.hits[0].point.lng],
                [chosenPark.latitude, chosenPark.longitude],
                [chosenCampground.latititude, chosenCampground.longitude]
              ]
              console.log(coordArray)
            })
            .then(getDirections(coordArray))
            .then(() => {
              directions = useDirections()
              directionsTarget = document.querySelector(
                `#directions--${tripObject.id}`
              )
              directionsTarget.innerHTML = directions.paths.instructions.map(
                direction => {
                  return `<div>${direction.text}</div>`
                }
              )
            })
        })
      })
  })
}

eventHub.addEventListener('tripWasSaved', () => {
  render()
})
