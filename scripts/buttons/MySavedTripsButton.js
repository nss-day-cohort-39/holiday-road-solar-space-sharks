const eventHub = document.querySelector('.container')

export const MySavedTripsButton = () => {
  return `
    <button class="mySavedTripsBtn">View My Trips!</button> 
  `
}

eventHub.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('mySavedTripsBtn')) {
    const mySavedTripsBtnClickEvent = new CustomEvent('mySavedTripsBtnWasClicked')
    eventHub.dispatchEvent(mySavedTripsBtnClickEvent)
  }
})