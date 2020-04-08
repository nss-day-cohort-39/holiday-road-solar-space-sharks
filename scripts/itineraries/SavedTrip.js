import { useParksByParkCode } from '../parks/parkProvider.js'
import { useFoods } from '../foods/foodProvider.js'
import { useAttractions } from '../attractions/attractionProvider.js'
import { useCampgroundsByPark, getCampgroundsByPark } from '../campgrounds/campgroundProvider.js'

const eventHub = document.querySelector('.container')
/* 
Create a function that returns an html representation of a saved trip
*/
export const SavedTrip = tripObject => {

        const parks = useParksByParkCode()
        const chosenPark = parks.find(park => park.parkCode === tripObject.parkCode)

        const foods = useFoods()
        const chosenFood = foods.find(food => food.id === tripObject.foodId)

        const attractions = useAttractions()
        const chosenAttraction = attractions.find(
            attraction => attraction.id === tripObject.attractionId)

        const campgrounds = useCampgroundsByPark()
      //if statement to render Saved Trip w/ or w/o campground
        if (tripObject.campgroundId !== null) {
                const chosenCampground = campgrounds.find(campground => parseInt(campground.id) === tripObject.campgroundId)
                return `
                      <section id="savedTrip--${tripObject.id}" class="savedTrip">
                        <h3 id="savedTripParkId--${tripObject.id}" class="${chosenPark.parkCode}">${chosenPark.name}</h3>
                        <h3 id="savedTripCampgroundId--${tripObject.id}" class="${chosenCampground.id}">${chosenCampground.name}</h3>
                        <h3 id="savedTripFoodId--${tripObject.id}" class="${chosenFood.id}">${chosenFood.businessName}</h3>
                        <h3 id="savedTripAttractionId--${tripObject.id}" class="${chosenAttraction.id}">${chosenAttraction.name}</h3>
                        <button id="getDirectionsButton--${tripObject.id}">Get Directions</button>
                        <div class="directions--${tripObject.id} directions"></div>
                      </section>
                `
          } else {
                return `
                      <section id="savedTrip--${tripObject.id}" class="savedTrip">
                        <h3 id="savedTripParkId--${tripObject.id}" class="${chosenPark.parkCode}">${chosenPark.name}</h3>
                        <h3 id="savedTripFoodId--${tripObject.id}" class="${chosenFood.id}">${chosenFood.businessName}</h3>
                        <h3 id="savedTripAttractionId--${tripObject.id}" class="${chosenAttraction.id}">${chosenAttraction.name}</h3>
                        <button id="getDirectionsButton--${tripObject.id}" class="${tripObject.id}">Get Directions</button>
                        <div class="directions--${tripObject.id} directions"></div>
                      </section>
                `
          }
}
eventHub.addEventListener("click", event => {
      if (event.target.id.startsWith("getDirectionsButton--")) {
            const [blah, tripId] = event.target.id.split("--")

            const parkIdTarget = document.getElementById(`savedTripParkId--${tripId}`)
            const parkId = parkIdTarget.className

            const foodIdTarget = document.getElementById(`savedTripFoodId--${tripId}`)
            const foodId = foodIdTarget.className

            const attractionIdTarget = document.getElementById(`savedTripAttractionId--${tripId}`)
            const attractionId = attractionIdTarget.className

            const getDirectionsButtonEvent = new CustomEvent("getDirectionsButtonClicked" , {
                  detail: {
                        tripId: tripId,
                        parkCode: parkId,
                        foodId: foodId,
                        attractionId: attractionId
                  }
            })
            eventHub.dispatchEvent(getDirectionsButtonEvent)
      }
})

