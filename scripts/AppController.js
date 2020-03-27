/*
    Manages the app state for all other components
*/
const eventHub = document.querySelector('.container')

let chosenPark = ""
let chosenFood = ""
let chosenAttraction = ""

//default page state
let pageState = "home"

eventHub.addEventListener("newTripBtnWasClicked", event => {
    pageState = "parkSelect"
})


eventHub.addEventListener("saveParkButtonClicked", event => {
    chosenPark = event.detail.parkCode
    console.log(chosenPark)
    pageState = "eaterySelect"
})

eventHub.addEventListener("saveFoodButtonClicked", event => {
    pageState = "attractionSelect"
})

eventHub.addEventListener("saveAttractionButtonClicked", event => {
    pageState = "myTrip"
})