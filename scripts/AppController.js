/*
    Manages the app state for all other components
*/
const eventHub = document.querySelector('.container')

//default page state
let pageState = "home"

eventHub.addEventListener("newTripBtnWasClicked", event => {
    pageState = "parkSelect"
})

eventHub.addEventListener("saveParkButtonClicked", event => {
    pageState = "eaterySelect"
})

eventHub.addEventListener("saveFoodButtonClicked", event => {
    pageState = "attractionSelect"
})

eventHub.addEventListener("saveAttractionButtonClicked", event => {
    pageState = "myTrip"
})