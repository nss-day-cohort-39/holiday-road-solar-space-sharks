/*
    creates an HTML representation of the food details
*/

export const FoodPreview = (foodObject) => {
    return `
        <div class="previewProperties">
        <h2>${foodObject.businessName}</h2>
        <p>${foodObject.description}</p>
        </div>
    `
}