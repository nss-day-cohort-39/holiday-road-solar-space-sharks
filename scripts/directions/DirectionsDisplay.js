import { getFoodCoords, getAttractionCoords, useFoodCoords, useAttractionCoords, getParkCoords, useParkCoords} from "./coordinateProvider.js"
import { useFoods, getFoods } from "../foods/foodProvider.js"
import { useAttractions, getAttractions } from "../attractions/attractionProvider.js"
import { useDirections, getDirections } from "./directionProvider.js"
import { useParksByParkCode, getParksByParkCode } from "../parks/parkProvider.js"
import { BackButton } from "../buttons/BackButton.js"


const eventHub = document.querySelector(".container")



eventHub.addEventListener("getDirectionsButtonClicked", event => {
      const directionsTarget = document.querySelector(`.directionsContainer`)
      directionsTarget.innerHTML = ""
      getParksByParkCode(event.detail.parkCode)
      .then(() => {
          getFoods()
          getAttractions()

          const attractions = useAttractions()
          const foods = useFoods()
          const parks = useParksByParkCode()

          const savedFoodId = parseInt(event.detail.foodId)
          const savedFood = foods.find(food => {
              return food.id === savedFoodId
          })

          const savedAttractionId = parseInt(event.detail.attractionId)
          const savedAttraction = attractions.find(attraction => {
              return attraction.id === savedAttractionId
          })

          const savedParkId = event.detail.parkCode
          const savedPark = parks.find(park => {
              return park.parkCode === savedParkId
          })

          return {savedFood, savedAttraction, savedPark}
      })
      .then(({savedFood, savedAttraction, savedPark}) => {
          getFoodCoords(savedFood)
          .then(getParkCoords(savedPark))
          .then(getAttractionCoords(savedAttraction))
          .then(() => {
            const foodCoords = useFoodCoords()
            const attractionCoords = useAttractionCoords() 
            const parkCoords = useParkCoords()

            return {foodCoords, attractionCoords, parkCoords}
          })
      })
      .then(({foodCoords, attractionCoords, parkCoords}) => {
          const coordArray = [
            [36.174465, -86.76796]
          ]
          if (attractionCoords !== [undefined,undefined]) {
            coordArray.push([attractionCoords[0], attractionCoords[1]])
          }
          if (foodCoords !== [undefined,undefined]) {
            coordArray.push([foodCoords[0], foodCoords[1]])
          }
          if (parkCoords !== [undefined,undefined]) {
            coordArray.push([parkCoords[0], parkCoords[1]])
          }

          console.log(coordArray)
          getDirections(coordArray).then(() => {
              const directions = useDirections()
              let counter = 0
              directionsTarget.innerHTML += `
              <div class="previewProperties">
                <h2 class="bold">Trip Directions</h2>
                ${directions.map(direction => {
                    const distance = direction.distance*0.000621371
                    counter += 1
                    return `
                    <div class="directionStep">${counter}. ${direction.text} - <span class ="bold">${distance.toFixed(1)} mi</span></div>
                    `
                }).join("")}
                ${BackButton("savedTripsList")}
              </div>
              `
          })
      })
})


