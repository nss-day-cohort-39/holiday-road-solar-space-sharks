const navigationHub = document.querySelector("#navBar")
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#navBar__road")

//default nav bar styling
export const TopNavBar = () => {
    contentTarget.innerHTML = `
        <div id="navBar__road__button--home" class="navBar__road__icon icon--home"></div>
        <div id="navBar__road__button--park" class="navBar__road__icon"></div>
        <div id="navBar__road__button--campground" class="navBar__road__icon"></div>
        <div id="navBar__road__button--food" class="navBar__road__icon"></div>
        <div id="navBar__road__button--attraction" class="navBar__road__icon"></div>
        <div id="navBar__road__button--savedTripsList" class="navBar__road__icon icon--star"></div>
    `
}

export const UpdateNavBar = (pageState) => {

    //remove previous position classes so that we can set a new one
    const positionClasses = [
            'position--home',
            'position--park',
            'position--campground',
            'position--food',
            'position--attraction',
            'position--savedTripsList'
        ]
        //reset the styling on the Nav Bar except when page state is myTrip when the van icon should stay where it is
    if (pageState !== "myTrip") {
        TopNavBar()
        positionClasses.forEach(positionClass => {
            document.querySelector('#navBar__road__button--van').classList.remove(positionClass)
        })
    }

    if (pageState === "home") {
        document.querySelector('#navBar__road__button--van').classList.add("position--home")
    } else if (pageState === "parkSelect") {
        document.querySelector('#navBar__road__button--van').classList.add("position--park")
    } else if (pageState === "campgroundSelect") {
        document.querySelector('#navBar__road__button--van').classList.add("position--campground")
    } else if (pageState === "eaterySelect") {
        document.querySelector('#navBar__road__button--van').classList.add("position--food")
    } else if (pageState === "attractionSelect") {
        document.querySelector('#navBar__road__button--van').classList.add("position--attraction")
    } else if (pageState === "savedTripsList") {
        document.querySelector('#navBar__road__button--van').classList.add("position--savedTripsList")
    }

}

navigationHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "navBar__road__button--home") {
        const homeButtonClickEvent = new CustomEvent('homeButtonClicked')
        eventHub.dispatchEvent(homeButtonClickEvent)

    }
})