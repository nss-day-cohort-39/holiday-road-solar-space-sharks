/*
    creates an HTML representation of the campground details
*/

export const CampgroundPreview = (campObject) => {
    return `
        <h2>${campObject.name}</h2>
        ${campObject.addresses.forEach(address => {
            if (address.type === "Physical" ) {
                return `
                <div>Address: ${address.line1} ${address.city}, ${address.stateCode} ${address.postalCode}</div>
                `
            } else {
                return `
                <div>Address: Please <a href${campObject.directionsUrl}>click here</a> for directions </div>
                `
            }
        })}
       
            

    `
}

{/* <div>${Object.keys(campObject.operatingHours.standardHours)}</div>
<div>${Object.values(campObject.operatingHours.standardHours)}</div> */}