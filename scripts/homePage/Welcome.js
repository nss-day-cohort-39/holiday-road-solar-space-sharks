import { NewTripButton } from "../buttons/NewTripButton.js"
import { MySavedTripsButton } from "../buttons/MySavedTripsButton.js"

const contentTarget = document.querySelector('.welcomeContainer')

export const Welcome = () => {
  contentTarget.innerHTML = `
  <h1>Welcome!</h1>
  ${NewTripButton()}
  ${MySavedTripsButton()}
  `
}