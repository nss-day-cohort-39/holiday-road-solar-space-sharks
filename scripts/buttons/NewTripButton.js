const eventHub = document.querySelector('.container')

export const NewTripButton = () => {
  return `
    <button class="newTripBtn">Start a New Trip!</button> 
  `
}

eventHub.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('newTripBtn')) {
    const newTripBtnClickEvent = new CustomEvent('newTripBtnWasClicked')
    eventHub.dispatchEvent(newTripBtnClickEvent)
  }
})