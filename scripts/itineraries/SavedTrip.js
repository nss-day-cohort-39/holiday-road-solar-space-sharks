import { useParksByParkCode } from '../parks/parkProvider.js'
import { useFoods } from '../foods/foodProvider.js'
import { useAttractions } from '../attractions/attractionProvider.js'
import {
  useCampgroundsByPark,
  getCampgroundsByPark
} from '../campgrounds/campgroundProvider.js'

/* 
Create a function that returns an html representation of a saved trip
*/
export const SavedTrip = tripObject => {
  const parks = useParksByParkCode()
  const chosenPark = parks.find(park => park.parkCode === tripObject.parkCode)

  const foods = useFoods()
  const chosenFood = foods.find(food => food.id === tripObject.foodId)

  const attractions = useAttractions()
  const chosenAttraction = attractions.find(
    attraction => attraction.id === tripObject.attractionId
  )

  const campgrounds = useCampgroundsByPark()
  //if statement to render Saved Trip w/ or w/o campground
  if (tripObject.campgroundId !== null) {
    const chosenCampground = campgrounds.find(
      campground => parseInt(campground.id) === tripObject.campgroundId
    )
    return `
                      <section id="savedTrip--${tripObject.id}" class="savedTrip">
                        <h3>${chosenPark.name}</h3>
                        <h3>${chosenCampground.name}</h3>
                        <h3>${chosenFood.businessName}</h3>
                        <h3>${chosenAttraction.name}</h3>
                        <div id="directions--${tripObject.id}"></div>
                      </section>
                `
  } else {
    return `
                      <section id="savedTrip--${tripObject.id}" class="savedTrip">
                        <h3>${chosenPark.name}</h3>
                        <h3>${chosenFood.businessName}</h3>
                        <h3>${chosenAttraction.name}</h3>
                        <div id="directions--${tripObject.id}"></div>
                      </section>
                `
  }
}
