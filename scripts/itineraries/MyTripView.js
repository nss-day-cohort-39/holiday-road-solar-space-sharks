import { useParksByState } from '../parks/parkProvider.js'
import { useAttractions } from '../attractions/attractionProvider.js'
import { useFoods } from '../foods/foodProvider.js'
import { saveNewTrip } from './savedTripsProvider.js'
import { useCampgroundsByPark } from '../campgrounds/campgroundProvider.js'
import { BackButton } from '../buttons/BackButton.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.previewContainer')

//create the default values for the trip
let chosenParkCode = ''
let chosenFoodId = null
let chosenAttractionId = null
let chosenCampgroundId = null

//initial render of the three sections inside of previewContainer on the DOM
export const RenderMyTripViewContainers = () => {
    contentTarget.innerHTML = `
    <h2>My Current Trip</h2>
    <section class="previewChoice"><span class="previewChoice__label">Park</span> <span id="myTripPark">---</span></section>
    <section class="previewChoice"><span class="previewChoice__label">Campground</span> <span id="myTripCampground">---</span></section>
    <section class="previewChoice"><span class="previewChoice__label">Restaurant</span> <span id="myTripFood"></span>---</section>
    <section class="previewChoice"><span class="previewChoice__label">Attraction</span> <span id="myTripAttraction">---</span></section>
    <div class="saveTripButtonContainer">
    </div>
    <div class="backButtonContainer"></div>
    `
}

//add back button that is aware of previous page
eventHub.addEventListener("myTripButtonClicked", event => {
    const backButtonContainer = document.querySelector(".backButtonContainer")
    backButtonContainer.innerHTML = BackButton(event.detail.newPageState)
})

// make sure save trip button doesn't render until all required fields are selected
const checkSaveTripButtonRenderCondition = () => {
    const backButtonContainer = document.querySelector(".backButtonContainer")
    const buttonContainerElement = document.querySelector(
        '.saveTripButtonContainer'
    )

    if (
        chosenParkCode !== '' &&
        chosenFoodId !== null &&
        chosenAttractionId !== null
    ) {
        backButtonContainer.innerHTML = BackButton("attractionSelect")
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

        const saveTripButtonClickEvent = new CustomEvent("saveCompleteTripButtonWasClicked")
        eventHub.dispatchEvent(saveTripButtonClickEvent)

        const newTripObj = {
            timestamp: Date.now(),
            parkCode: chosenParkCode,
            campgroundId: parseInt(chosenCampgroundId),
            foodId: parseInt(chosenFoodId),
            attractionId: parseInt(chosenAttractionId)
        }
        saveNewTrip(newTripObj)
    }

})

//when the user clicks the home button and then selects a new state, clear out the old data
eventHub.addEventListener('newTripBtnWasClicked', event => {
    chosenParkCode = ''
    chosenFoodId = null
    chosenAttractionId = null
    chosenCampgroundId = null

    document.querySelector('#myTripPark').innerHTML = ``
    document.querySelector('#myTripAttraction').innerHTML = ``
    document.querySelector('#myTripFood').innerHTML = ``
    document.querySelector('#myTripCampground').innerHTML = ``

})

//when the "save park button" is clicked, get the chosen parkCode and insert it into the myTripPark section on the DOM
eventHub.addEventListener('saveParkButtonClicked', event => {
    RenderMyTripViewContainers()

    //reset the chosen food and attraction options when save button is clicked
    chosenFoodId = null
    chosenAttractionId = null
    chosenCampgroundId = null

    const parks = useParksByState()
    chosenParkCode = event.detail.parkCode
    const chosenParkObject = parks.find(park => park.parkCode === chosenParkCode)

    const parkTarget = document.querySelector('#myTripPark')
    parkTarget.innerHTML = chosenParkObject.name
    checkSaveTripButtonRenderCondition()
})

eventHub.addEventListener('saveAttractionButtonClicked', event => {
    const attractions = useAttractions()
    chosenAttractionId = event.detail.attractionId
    if (chosenAttractionId !== "0") {
        const chosenAttractionObject = attractions.find(
            attraction => attraction.id === parseInt(chosenAttractionId)
        )

        const attractionTarget = document.querySelector('#myTripAttraction')
        attractionTarget.innerHTML = chosenAttractionObject.name
        checkSaveTripButtonRenderCondition()
    }
})

//when the "save food button" is clicked, get the chosen food ID and insert it into the myTripFood section on the DOM
eventHub.addEventListener('saveFoodButtonClicked', event => {
    const food = useFoods()
    chosenFoodId = event.detail.foodId
    if (chosenFoodId !== "0") {
        const chosenFoodObject = food.find(food => food.id === parseInt(chosenFoodId))

        const foodTarget = document.querySelector('#myTripFood')
        foodTarget.innerHTML = chosenFoodObject.businessName
        checkSaveTripButtonRenderCondition()
    }
})

//when the "save campground button" is clicked, get the chosen campground ID and insert it into the myTripCampground section on the DOM
eventHub.addEventListener('saveCampgroundButtonClicked', event => {
    const campgrounds = useCampgroundsByPark()
    chosenCampgroundId = event.detail.campgroundId
    if (chosenCampgroundId !== "0") {
        const chosenCampgroundObject = campgrounds.find(campground => parseInt(campground.id) === parseInt(chosenCampgroundId))

        const campgroundTarget = document.querySelector('#myTripCampground')
        campgroundTarget.innerHTML = chosenCampgroundObject.name
        checkSaveTripButtonRenderCondition()
    }
})