import { useAttractions } from "./attractionProvider.js"
import { AttractionSelectDropdown } from "./AttractionSelectDropdown.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector(".dropdownContainer")

export const RenderAttractionsSelectComponent = () => {
    render()
}

const render = () => {
    const attractions = useAttractions()
    contentTarget.innerHTML += AttractionSelectDropdown(attractions)

}

