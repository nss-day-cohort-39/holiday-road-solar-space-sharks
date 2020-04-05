import { ViewMyTripButton } from "../buttons/ViewMyTripButton.js"
import { useFoods, getFoods } from "./foodProvider.js"
import { FoodSelectDropdown } from "./FoodSelectDropdown.js"
import { FoodPreview } from "./FoodPreview.js"
import { SaveFoodButton } from "../buttons/SaveFoodToTripButton.js"
import { useParksByState } from "../parks/parkProvider.js"
import { BackButton } from "../buttons/BackButton.js"

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

    contentTarget.innerHTML += ViewMyTripButton("eaterySelect")

}

eventHub.addEventListener("parkDropDownChanged", event => {
    getFoods().then(() => {


        //list of all the parks by state
        const parks = useParksByState()

        //list of all the foods
        const foods = useFoods()

        //park code the user chose from the drop-down
        const chosenParkCode = event.detail.parkCode
            //return a park object = the park code we chose in the park dropdown
        const chosenParkObject = parks.find(park => park.parkCode === chosenParkCode)

        // pull states property from chosen park object in the form of a string
        const chosenParkStates = chosenParkObject.states
            // creating a workable array of states from the string of states
        const chosenParkStatesArray = chosenParkStates.split(",")

        // iterate over array of states (within a park) and add each restaurant within those states to filtered foods array 
        let filteredFoods = []
        for (const state of chosenParkStatesArray) {
            const foundFood = foods.filter(food => food.state === state)
            filteredFoods = filteredFoods.concat(foundFood)
        }

        render(filteredFoods)

    })
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

eventHub.addEventListener("saveParkButtonClicked", event => {
    const hasCampgrounds = event.detail.hasCampgrounds
    console.log(hasCampgrounds)
    if (hasCampgrounds) {
        contentTarget.innerHTML += BackButton("campgroundSelect")
    } else {
        contentTarget.innerHTML += BackButton("parkSelect")
    }
})