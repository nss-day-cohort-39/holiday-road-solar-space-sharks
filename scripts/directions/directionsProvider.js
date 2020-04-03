import { keys } from '../Settings.js'

let directions = []

export const getDirections = coords => {
  const coordString = coords
    .Map(location => {
      return `
        point=${location[0]},${location[1]}
        `
    })
    .join('&')
  return fetch(
    `https://graphhopper.com/api/1/route?${coordString}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keys.graphhopperKey}`
  )
    .then(res => res.json())
    .then(parsedDirections => {
      direction = parsedDirections
    })
}

export const useDirections = () => directions.slice()
