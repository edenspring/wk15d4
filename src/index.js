import { CatCard, CatForm } from "./cat-card.js";


window.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.querySelector("#fetch-cats-button")
    const removeButton = document.querySelector("#remove-cats-button")
    removeButton.style.visibility = "hidden"
    
    // //---------------------------- Promise Chaining
    // fetchButton.addEventListener("click", e => {
    //     const catsDiv = document.querySelector(".cats-div")
    //     const catsContainer = document.createElement("div")
    //     catsContainer.classList.add("cats-container")
    //     let cats;
    //     fetch('/cats').then(data => data.json()).then(cats => {
    //         const allCats = []
    //         Object.values(cats).forEach(cat => {
    //             allCats.push(new CatCard(cat))
    //         })
    //         catsContainer.append(...allCats)
    //         catsDiv.append(catsContainer)
    //         removeButton.style.visibility = "visible"
    //         fetchButton.style.visibility = "hidden"
    //     })
    // })

    //---------------------------- async/await
    fetchButton.addEventListener("click", async e => {
        const catsDiv = document.querySelector(".cats-div")
        const catsContainer = document.createElement("div")
        catsContainer.classList.add("cats-container")
        const data = await fetch('/cats')
        const cats = await data.json()
        const allCats = []
        Object.values(cats).forEach(cat => {
            allCats.push(new CatCard(cat))
        })
        catsContainer.append(...allCats)
        catsDiv.append(catsContainer)
        removeButton.style.visibility = "visible"
        fetchButton.style.visibility = "hidden"
    })

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