const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.previewContainer')

let chosenPark = ""
let chosenFood = ""
let chosenAttraction = ""

export const RenderMyTripViewContainers = () => {
    contentTarget.innerHTML = `
    <section id="myTripPark"></section>
    <section id="myTripFood"></section>
    <section id="myTripAttraction"></section>
    `
}

eventHub.addEventListener("saveParkButtonClicked", event => {
    chosenPark = event.detail.parkCode
    const parkTarget = document.querySelector("#myTripPark")
    parkTarget.innerHTML = `Park: ${chosenPark}`
})