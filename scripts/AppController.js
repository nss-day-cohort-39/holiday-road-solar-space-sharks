import { UpdateNavBar } from "./navigation/TopNavBar.js"

/*
    Manages the app state for all other components
*/
const eventHub = document.querySelector('.container')

/*
List of possible app states
- home:
    target = .welcomeContainer
- parkSelect:
    target = .dropdownContainer--parks
- eaterySelect:
    target = .dropdownContainer--food
- attractionSelect:
    target = .dropdownContainer--attraction
- myTrip:
    target = .previewContainer
- savedTripsList:
    target = .savedTripsContainer
*/

//default page state
export let pageState = "home"

eventHub.addEventListener("newTripBtnWasClicked", event => {
    pageState = "parkSelect"
    pageStateChanged()
})

eventHub.addEventListener("saveParkButtonClicked", event => {
    pageState = "eaterySelect"
    pageStateChanged()
})

eventHub.addEventListener("saveFoodButtonClicked", event => {
    pageState = "attractionSelect"
    pageStateChanged()
})

eventHub.addEventListener("saveAttractionButtonClicked", event => {
    pageState = "myTrip"
    pageStateChanged()
})

eventHub.addEventListener("myTripButtonClicked", event => {
    pageState = "myTrip"
    pageStateChanged()
})

eventHub.addEventListener("saveCompleteTripButtonWasClicked", event => {
    pageState = "savedTripsList"
    pageStateChanged()
})

eventHub.addEventListener("mySavedTripsBtnWasClicked", event => {
    pageState = "savedTripsList"
    pageStateChanged()
})

eventHub.addEventListener("homeButtonClicked", event => {
    pageState = "home"
    pageStateChanged()
})

const hideAllComponents = () => {
    const componentArray = [
        '.welcomeContainer',
        '.dropdownContainer--parks',
        '.dropdownContainer--food',
        '.dropdownContainer--attraction',
        '.previewContainer',
        '.savedTripsContainer'
    ]

    componentArray.forEach(component => document.querySelector(component).classList.add("hidden"))
}

export const pageStateChanged = () => {
    //add the "hidden" class to all components to reset the app state before running the logic
    hideAllComponents()

    if (pageState === "home") {
        document.querySelector(".welcomeContainer").classList.remove("hidden")
    } else if (pageState === "parkSelect") {
        document.querySelector(".dropdownContainer--parks").classList.remove("hidden")
    } else if (pageState === "eaterySelect") {
        document.querySelector(".dropdownContainer--food").classList.remove("hidden")
    } else if (pageState === "attractionSelect") {
        document.querySelector(".dropdownContainer--attraction").classList.remove("hidden")
    } else if (pageState === "myTrip") {
        document.querySelector(".previewContainer").classList.remove("hidden")
    } else if (pageState === "savedTripsList") {
        document.querySelector(".savedTripsContainer").classList.remove("hidden")
    } else {
        //if page state isn't set default to home
        document.querySelector(".welcomeContainer").classList.remove("hidden")
    }

    UpdateNavBar(pageState)
}