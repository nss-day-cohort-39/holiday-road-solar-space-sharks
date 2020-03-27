export const ParkPreview = (parkObject) => {
    return `
        <h2>${parkObject.fullName}</h2>
        <img width = "200px" src="${parkObject.images[0].url}">
    `
}