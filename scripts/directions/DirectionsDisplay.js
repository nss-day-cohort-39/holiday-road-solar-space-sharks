import { getFoodCoords, getAttractionCoords, useFoodCoords, useAttractionCoords, getParkCoords, useParkCoords} from "./coordinateProvider.js"
import { useFoods, getFoods } from "../foods/foodProvider.js"
import { useAttractions, getAttractions } from "../attractions/attractionProvider.js"
import { useDirections, getDirections } from "./directionProvider.js"
import { useParksByParkCode, getParksByParkCode } from "../parks/parkProvider.js"


const eventHub = document.querySelector(".container")


// export const renderDirections = directions => {
//     directions.paths.instructions
//       .map(direction => {
//         return `<div>${direction.text}</div>`
//       })
//       .join('')
//   }

let directionsVisibility = false

eventHub.addEventListener("getDirectionsButtonClicked", event => {
    directionsVisibility = !directionsVisibility
    if (directionsVisibility === true) {
    getParksByParkCode(event.detail.parkCode)
    getFoods()
    getAttractions()
    const attractions = useAttractions()
    const foods = useFoods()
    // const parks = useParksByParkCode()
    const savedFoodId = parseInt(event.detail.foodId)
    const savedFood = foods.find(food => {
        return food.id === savedFoodId
    })
    const savedAttractionId = parseInt(event.detail.attractionId)
    const savedAttraction = attractions.find(attraction => {
        return attraction.id === savedAttractionId
    })
    // const savedParkId = event.detail.parkCode
    // const savedPark = parks.find(park => {
    //     return park.parkCode === savedParkId
    // })
    
    
    getFoodCoords(savedFood)
    getAttractionCoords(savedAttraction)
    // getParkCoords(savedPark)
        .then(() => {
            const foodCoords = useFoodCoords()
            const attractionCoords = useAttractionCoords()
  
            // const parkCoords = useParkCoords()
            const coordArray = [
              [36.174465, -86.76796]
            ]
            if (attractionCoords !== [undefined, undefined]) {
              coordArray.push([attractionCoords[0], attractionCoords[1]])
            }
            if (foodCoords !== [undefined, undefined]) {
              coordArray.push([foodCoords[0], foodCoords[1]])
            }
            // if (parkCoords !== [undefined, undefined]) {
            //   coordArray.push([parkCoords[0], parkCoords[1]])
            // }
            getDirections(coordArray).then(() => {
                const directions = useDirections()
                const directionsTarget = document.querySelector(`.directions--${event.detail.tripId}`)
                let counter = 0
                directions.forEach(direction => {
                    const distance = direction.distance*0.000621371
                    counter += 1
                    directionsTarget.innerHTML += `<div>${counter}. ${direction.text} - <span class ="bold">${distance.toFixed(1)} mi</span></div>`
                })
                
            })
        
        })
    } else {
      document.querySelector(`.directions--${event.detail.tripId}`).innerHTML = ""


    }
})


