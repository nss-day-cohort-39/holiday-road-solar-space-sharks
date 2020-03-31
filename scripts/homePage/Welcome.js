import { NewTripButton } from "../buttons/NewTripButton.js"
import { MySavedTripsButton } from "../buttons/MySavedTripsButton.js"
import { StateSelectDropdown } from "../parks/StateSelectDropdown.js"


// get a DOM reference to where the welcome page will render
const contentTarget = document.querySelector('.welcomeContainer')


export const Welcome = () => {
    /* define the inner HTML of the content target and
    call the necessary button components */
    contentTarget.innerHTML = `
  <h1>Welcome!</h1>
  ${StateSelectDropdown()}
  ${NewTripButton()}
  ${MySavedTripsButton()}
  `
}