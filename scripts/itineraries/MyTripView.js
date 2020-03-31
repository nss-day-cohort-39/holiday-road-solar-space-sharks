import { useParksByState } from '../parks/parkProvider.js'
import { useAttractions } from '../attractions/attractionProvider.js'
import { useFoods } from '../foods/foodProvider.js'
import { saveNewTrip } from './savedTripsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.previewContainer')

//create the default values for the trip
let chosenParkCode = ''
let chosenFoodId = null
let chosenAttractionId = null

//initial render of the three sections inside of previewContainer on the DOM
export const RenderMyTripViewContainers = () => {
  contentTarget.innerHTML = `
    <section id="myTripPark"></section>
    <section id="myTripFood"></section>
    <section id="myTripAttraction"></section>
    <div class="saveTripButtonContainer">
       
    </div>
    `
}

// make sure save trip button doesn't render until all required fields are selected
const checkSaveTripButtonRenderCondition = () => {
  const buttonContainerElement = document.querySelector(
    '.saveTripButtonContainer'
  )

  if (
    chosenParkCode !== '' &&
    chosenFoodId !== null &&
    chosenAttractionId !== null
  ) {
    buttonContainerElement.innerHTML = `<button id="saveCompleteTrip">Save to My Trips</button>`
  } else {
    buttonContainerElement.innerHTML = ''
  }
}

/* when the "save to my trips" button is clicked create a new trip
object and pass it to the saveTrip function
*/
eventHub.addEventListener('click', event => {
  if (event.target.id === 'saveCompleteTrip') {
    const newTripObj = {
      timestamp: Date.now(),
      parkCode: chosenParkCode,
      foodId: parseInt(chosenFoodId),
      attractionId: parseInt(chosenAttractionId)
    }
    saveNewTrip(newTripObj)
  }
})

//when the "save park button" is clicked, get the chosen parkCode and insert it into the myTripPark section on the DOM
eventHub.addEventListener('saveParkButtonClicked', event => {
  RenderMyTripViewContainers()

  //reset the chosen food and attraction options when save button is clicked
  chosenFoodId = null
  chosenAttractionId = null

  const parks = useParksByState()
  chosenParkCode = event.detail.parkCode
  const chosenParkObject = parks.find(park => park.parkCode === chosenParkCode)

  const parkTarget = document.querySelector('#myTripPark')
  parkTarget.innerHTML = `Park: ${chosenParkObject.name}`
  checkSaveTripButtonRenderCondition()
})

eventHub.addEventListener('saveAttractionButtonClicked', event => {
  const attractions = useAttractions()
  chosenAttractionId = event.detail.attractionId
  const chosenAttractionObject = attractions.find(
    attraction => attraction.id === parseInt(chosenAttractionId)
  )

  const attractionTarget = document.querySelector('#myTripAttraction')
  attractionTarget.innerHTML = `Attraction: ${chosenAttractionObject.name}`
  checkSaveTripButtonRenderCondition()
})

//when the "save food button" is clicked, get the chosen food ID and insert it into the myTripFood section on the DOM
eventHub.addEventListener('saveFoodButtonClicked', event => {
  const food = useFoods()
  chosenFoodId = event.detail.foodId
  const chosenFoodObject = food.find(food => food.id === parseInt(chosenFoodId))

  const foodTarget = document.querySelector('#myTripFood')
  foodTarget.innerHTML = `Restaurant: ${chosenFoodObject.businessName}`
  checkSaveTripButtonRenderCondition()
})
