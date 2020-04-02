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
        <div id="navBar__road__button--myTrip" class="navBar__road__icon icon--star"></div>
    `
}

export const UpdateNavBar = (pageState) => {
    //reset the styling on the Nav Bar
    TopNavBar()
        //remove the "current" style so that we can add it below
    document.querySelector('.navBar__road__icon').classList.remove("icon--current")

    if (pageState === "home") {
        document.querySelector('#navBar__road__button--home').classList.remove("icon--home")
        document.querySelector('#navBar__road__button--home').classList.add("icon--current")
    } else if (pageState === "parkSelect") {
        document.querySelector('#navBar__road__button--park').classList.add("icon--current")
    } else if (pageState === "eaterySelect") {
        document.querySelector('#navBar__road__button--food').classList.add("icon--current")
    } else if (pageState === "attractionSelect") {
        document.querySelector('#navBar__road__button--attraction').classList.add("icon--current")
    } else if (pageState === "myTrip") {
        document.querySelector('#navBar__road__button--myTrip').classList.remove("icon--star")
        document.querySelector('#navBar__road__button--myTrip').classList.add("icon--current")
    } else {
        //default back to home state
        document.querySelector('#navBar__road__button--home').classList.remove("icon--home")
        document.querySelector('#navBar__road__button--home').classList.add("icon--current")
    }

}

eventHub.addEventListener("click", clickEvent => {
    console.log(`clicky ${clickEvent.target.id}`)
    if (clickEvent.target.id === "navBar__road__button--home") {
        console.log('clicked!')
        const homeButtonClickEvent = new CustomEvent('homeButtonClicked')
        eventHub.dispatchEvent(homeButtonClickEvent)

    }
})