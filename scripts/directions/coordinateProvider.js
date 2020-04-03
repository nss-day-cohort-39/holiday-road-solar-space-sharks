/*
Get coordinates for food, attractions
*/
import { keys } from '../Settings.js'

let foodCoords = []

export const getFoodCoords = food => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${food.city}+${food.state}&locale=us&debug=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedCoords => {
      foodCoords = parsedCoords
    })
}

export const useFoodCoords = () => foodCoords.slice()

let attractionCoords = []

export const getAttractionCoords = attraction => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${attraction.city}+${attraction.state}&locale=us&debug=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedCoords => {
      attractionCoords = parsedCoords
    })
}

export const useAttractionCoords = () => attractionCoords.slice()
