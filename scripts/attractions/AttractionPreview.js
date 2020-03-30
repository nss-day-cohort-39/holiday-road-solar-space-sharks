/*
    Creates an HTML representation of the attraction details
*/


export const AttractionPreview = (attractionObject) => {
    return `
        <h2>${attractionObject.name}</h2>
        <p>${attractionObject.description}</p>
    `
}