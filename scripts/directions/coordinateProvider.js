/*
Get coordinates for food, attractions
*/
import { keys } from '../Settings.js'

let foodCoords = []

export const getFoodCoords = food => {
    return fetch (
      `https://graphhopper.com/api/1/geocode?q=${food.city}&locale=us&debug=true&key=${keys.graphhopperKey}`
    )
      .then(res => res.json())
      .then(parsedFoodCoords => {
        foodCoords = [parsedFoodCoords.hits[0].point.lat,parsedFoodCoords.hits[0].point.lng]
      })

}

export const useFoodCoords = () => foodCoords.slice()

let attractionCoords = []

export const getAttractionCoords = attraction => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${attraction.city}, ${attraction.state}&locale=us&debug=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedAttractionCoords => {
      attractionCoords = [parsedAttractionCoords.hits[0].point.lat,parsedAttractionCoords.hits[0].point.lng]
    })
}

export const useAttractionCoords = () => attractionCoords.slice()

let ParkCoords = []

export const getParkCoords = park => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${park.name}&locale=us&debug=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedParkCoords => {
      ParkCoords = [parsedParkCoords.hits[0].point.lat,parsedParkCoords.hits[0].point.lng]
    })
}

export const useParkCoords = () => ParkCoords.slice()



