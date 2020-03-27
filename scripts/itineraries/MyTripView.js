const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.previewContainer')

//create the default values for the trip
let chosenPark = ""
let chosenFood = ""
let chosenAttraction = ""

//initial render of the three sections inside of previewContainer on the DOM
export const RenderMyTripViewContainers = () => {
    contentTarget.innerHTML = `
    <section id="myTripPark"></section>
    <section id="myTripFood"></section>
    <section id="myTripAttraction"></section>
    `
}

//when the "save park button" is clicked, get the chosen parkCode and insert it into the myTripPark section on the DOM
eventHub.addEventListener("saveParkButtonClicked", event => {
    chosenPark = event.detail.parkName
    const parkTarget = document.querySelector("#myTripPark")
    parkTarget.innerHTML = `Park: ${chosenPark}`
})