/*
    creates an HTML representation of the campground details
*/

export const CampgroundPreview = (campObject) => {
    const campgroundHoursEntrieArray = Object.entries(campObject.operatingHours[0].standardHours)
    console.log(campgroundHoursEntrieArray)
    return `
        <h2>${campObject.name}</h2>
        <div>Address: ${campObject.addresses[0].line1} ${campObject.addresses[0].city}, ${campObject.addresses[0].stateCode} ${campObject.addresses[0].postalCode}</div>
        <div class="campgroundHours>
            ${campgroundHoursEntrieArray.map(day => {
                return `
                <div class="campgroundDayHours">
                    <div>${day[0]}</div>
                    <div>${day[1]}</div>
                </div>
                `
            }).join("")}
        </div>
    `
}
