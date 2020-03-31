const states = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ]


export const StateSelectDropdown = () => {

  

    return `
        <select id="stateSelectDropdown">
            <option value="0">Where to next?</option>
            ${states.map(state => {
                return `
                <option value="${state}">${state}</option>
                `
            }).join("")
            }
         </select>
    `
}