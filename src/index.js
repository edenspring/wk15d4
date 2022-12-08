import { CatCard, CatForm } from "./cat-card.js";


window.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.querySelector("#fetch-cats-button")
    const removeButton = document.querySelector("#remove-cats-button")
    removeButton.style.visibility = "hidden"
    
    //---------------------------- Promise Chaining
    fetchButton.addEventListener("click", e => {
        const catsDiv = document.querySelector(".cats-div")
        const catsContainer = document.createElement("div")
        catsContainer.classList.add("cats-container")
        // Fill in fetch data and Logic here using promise chaining!!
        // We'll want to fetch our cats, convert that JSON information to
        // usable data, use our class constructor (new CatCard(cat)) to create
        // elements for our cats, append each one to the cats-container, then,
        // append that container to the catsDiv


        removeButton.style.visibility = "visible"
        fetchButton.style.visibility = "hidden"
    })

    // //---------------------------- async/await
    // fetchButton.addEventListener("click", async e => {
    //     const catsDiv = document.querySelector(".cats-div")
    //     const catsContainer = document.createElement("div")
    //     catsContainer.classList.add("cats-container")
    //     // Fill in fetch data and Logic here using async/await!!
    //     // We'll want to fetch our cats, convert that JSON information to
    //     // usable data, use our class constructor (new CatCard(cat)) to create
    //     // elements for our cats, append each one to the cats-container, then,
    //     // append that container to the catsDiv
    //     removeButton.style.visibility = "visible"
    //     fetchButton.style.visibility = "hidden"
    // })

    removeButton.addEventListener("click", e => {
        document.querySelector(".cats-container").remove()
        fetchButton.style.visibility = "visible"
        removeButton.style.visibility = "hidden"
    })

    const addButton = document.querySelector("#cats-form-button")
    addButton.addEventListener("click", e => {
        const newCats = document.querySelector(".new-cats")
        newCats.append(new CatForm())
        addButton.style.visibility = "hidden";
    })
});