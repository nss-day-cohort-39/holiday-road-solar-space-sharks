import { keys } from '../Settings.js'

let directions = []

export const getDirections = coords => {
    console.log(coords)
  const coordString = coords.map(location => {
    return `point=${location[0]},${location[1]}`
    }).join("&")
    console.log(coordString)
    return fetch(
    `https://graphhopper.com/api/1/route?${coordString}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keys.graphhopperKey}`
    )
    .then(res => res.json())
    .then(parsedDirections => {
      directions = parsedDirections
      console.log(directions)
    })
}

export const useDirections = () => directions.slice()









