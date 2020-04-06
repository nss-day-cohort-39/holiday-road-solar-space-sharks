import { getFoodCoords, getAttractionCoords, useFoodCoords, useAttractionCoords } from "./coordinateProvider.js"
import { useFoods, getFoods } from "../foods/foodProvider.js"
import { useAttractions, getAttractions } from "../attractions/attractionProvider.js"
import { useDirections, getDirections } from "./directionProvider.js"
import { useParksByParkCode, getParksByParkCode } from "../parks/parkProvider.js"
import { getCampgroundsByPark, useCampgroundsByPark } from "../campgrounds/campgroundProvider.js"

const eventHub = document.querySelector(".container")


// export const renderDirections = directions => {
//     directions.paths.instructions
//       .map(direction => {
//         return `<div>${direction.text}</div>`
//       })
//       .join('')
//   }


eventHub.addEventListener("getDirectionsButtonClicked", event => {
    getParksByParkCode(event.detail.parkCode)
    getCampgroundsByPark(event.detail.parkCode)
    getFoods()
    getAttractions()
    const attractions = useAttractions()
    const foods = useFoods()
    const savedFoodId = parseInt(event.detail.foodId)
    const savedFood = foods.find(food => {
        return food.id === savedFoodId
    })
    const savedAttractionId = parseInt(event.detail.attractionId)
    const savedAttraction = attractions.find(attraction => {
                return attraction.id === savedAttractionId
            })
    getFoodCoords(savedFood)
    getAttractionCoords(savedAttraction)
        .then(() => {
            const foodCoords = useFoodCoords()
            const attractionCoords = useAttractionCoords()
            const parks = useParksByParkCode()
            const chosenPark = parks.find(park => {
                return park.parkCode === event.detail.parkCode
            })
            const campgrounds = useCampgroundsByPark()
            const chosenCampground = campgrounds.find(campground => {
                return campground.id === event.detail.campgroundId
            })

            const coordArray = [
                [36.174465, -86.76796],
                [attractionCoords[0], attractionCoords[1]],
                [foodCoords[0], foodCoords[1]],
                [parseFloat(chosenPark.latitude), parseFloat(chosenPark.longitude)],
                [parseFloat(chosenCampground.latitude), parseFloat(chosenCampground.longitude)]
                ]
                console.log(coordArray)
              getDirections(coordArray)
        })
        .then(() => {
              const directions = useDirections()
              const directionsTarget = document.querySelector(
                `.directions--${event.detail.tripId}`
              )
              directionsTarget.innerHTML = directions.paths.instructions.map(
                direction => {
                  return `<div>${direction.text}</div>`
                }
              )
        })
    // renderDirections()
})

