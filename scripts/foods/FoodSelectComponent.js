import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"
import { useFoods } from "./foodProvider.js"
import { FoodSelectDropdown } from "./FoodSelectDropdown.js"
import { FoodPreview } from "./FoodPreview.js"
import { SaveFoodButton } from "../buttons/SaveFoodToTripButton.js"
import { useParksByState } from "../parks/parkProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer--food")

// export the initial page rendering of the Food Select Dropdown
export const RenderFoodSelectComponent = () => {

}

// function that pulls the food data and iterates each restaurant to display the Food dropdown HTML rep. 
const render = (filteredFoods) => {

    contentTarget.innerHTML = FoodSelectDropdown(filteredFoods)

    contentTarget.innerHTML += `
    <section id="foodPreview"></section>
    `
    contentTarget.innerHTML += SaveFoodButton()

    contentTarget.innerHTML += ViewMyTripButton()

}

eventHub.addEventListener("parkDropDownChanged", event => {
    //list of all the parks
    const parks = useParksByState()

    //list of all the foods
    const foods = useFoods()

    //park code the user chose from the drop-down
    const chosenParkCode = event.detail.parkCode

    const chosenParkObject = parks.find(park => park.parkCode === chosenParkCode)

    const chosenParkState = chosenParkObject.states

    const filteredFoods = foods.filter(food => food.state === chosenParkState)

    render(filteredFoods)

})

eventHub.addEventListener("foodDropDownChanged", event => {
    const contentTarget = document.querySelector("#foodPreview")

    const foods = useFoods()

    //get the value of the food ID that the user chose
    let foodSelectDropdownValue = document.getElementById("foodSelectDropdown").value

    const foundFood = foods.find(food => food.id === parseInt(foodSelectDropdownValue))

    //show the details of the food place
    contentTarget.innerHTML = FoodPreview(foundFood)
})