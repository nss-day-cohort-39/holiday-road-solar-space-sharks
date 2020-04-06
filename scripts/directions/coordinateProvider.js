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
    .then(parsedFoodCoords => {
      foodCoords = [parsedFoodCoords.hits[0].point.lat,parsedFoodCoords.hits[0].point.lng]
    })
}

export const useFoodCoords = () => foodCoords.slice()

let attractionCoords = []

export const getAttractionCoords = attraction => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${attraction.city}+${attraction.state}&locale=us&debug=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedAttractionCoords => {
      attractionCoords = [parsedAttractionCoords.hits[0].point.lat,parsedAttractionCoords.hits[0].point.lng]
    })
}

export const useAttractionCoords = () => attractionCoords.slice()

let ParkCoords = []

export const getParkCoords = Park => {
  const truePark = Park.addresses.filter(address => {
    return address.type === "Physical"
  })
  console.log(truePark)
  console.log(Park)
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${truePark.city}+${truePark.stateCode}&point=${parseFloat(Park.latitude)},${parseFloat(Park.longitude)}&locale=us&debug=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedParkCoords => {
      ParkCoords = [parsedParkCoords.hits[0].point.lat,parsedParkCoords.hits[0].point.lng]
      console.log(ParkCoords)
    })
}

export const useParkCoords = () => ParkCoords.slice()



