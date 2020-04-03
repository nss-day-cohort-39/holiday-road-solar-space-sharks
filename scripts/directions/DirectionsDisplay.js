export const DirectionsDisplay = directions => {
  directions.paths.instructions
    .map(direction => {
      return `<div>${direction.text}</div>`
    })
    .join('')
}
