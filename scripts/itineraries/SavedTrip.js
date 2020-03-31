import { useParks } from '../parks/parkProvider.js'
import { useFoods } from '../foods/foodProvider.js'
import { useAttractions } from '../attractions/attractionProvider.js'

/* 
Create a function that returns an html representation of a saved trip
*/
export const SavedTrip = tripObject => {
  const parks = useParks()
  const chosenPark = parks.find(park => park.parkCode === tripObject.parkCode)

  const foods = useFoods()
  const chosenFood = foods.find(food => food.id === tripObject.foodId)
  const attractions = useAttractions()
  const chosenAttraction = attractions.find(
    attraction => attraction.id === tripObject.attractionId
  )

  return `
    <section id="savedTrip--${tripObject.id}">
      <h3>${chosenPark.name}</h3>
      <h3>${chosenFood.businessName}</h3>
      <h3>${chosenAttraction.name}</h3>
    </section>
  `
}
