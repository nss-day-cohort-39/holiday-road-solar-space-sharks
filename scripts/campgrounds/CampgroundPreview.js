/*
    creates an HTML representation of the campground details
*/

export const CampgroundPreview = (campObject) => {
        // object representation of ordered week by day
        var daysOfTheWeek = {
            "sunday": 1,
            "monday": 2,
            "tuesday": 3,
            "wednesday": 4,
            "thursday": 4,
            "friday": 5,
            "saturday": 6,
        }



        const hoursdisplayfunction = () => {
                // create an array of arrays of campground Hours [day, hours] from the object 
                const campgroundHoursEntrieArray = Object.entries(campObject.operatingHours[0].standardHours)
                    // sort array using daysOfTheWeek format
                const ordered = campgroundHoursEntrieArray.sort(function(a, b) {
                        return daysOfTheWeek[a[0]] - daysOfTheWeek[b[0]];
                    })
                    // create array that can be accessed/used by map function below
                const DayArray = []
                ordered.forEach(day => {
                    DayArray.push([day[0], day[1]])
                });
                return `
            <div class="hoursHeader header">Hours:</div>
            <div class="campgroundHourColumns">
                ${DayArray.map(day => {
                    return `
                        <div class="campgroundHours">
                            <div class="campgroundDay header">${day[0]}</div>
                            <div class="campgroundDay">${day[1]}</div>
                        </div>
                    `
                }).join("")}
            </div>
            `
        }

        return `
        <div class="previewProperties">
        <h2>${campObject.name}</h2>
        ${campObject.hasOwnProperty("addresses") ? `<div><span class="header">Address:</span> ${campObject.addresses[0].line1} ${campObject.addresses[0].city}, ${campObject.addresses[0].stateCode} ${campObject.addresses[0].postalCode}</div>` : ``}
        <div><span class="header">Wifi:</span>
         ${campObject.amenities.internetconnectivity === "Yes" ? `<span class ="green">&#10003;</span>` : `<span class ="red">&#10006;</span>` }</div>
        ${campObject.hasOwnProperty("operatingHours") ? hoursdisplayfunction() : ``}
        </div>
        `
}