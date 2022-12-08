import { CatCard, CatForm } from "./cat-card.js";


window.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.querySelector("#fetch-cats-button")
    // // promise chaining
    // fetchButton.addEventListener("click", e => {
    //     const catsDiv = document.querySelector(".cats-div")
    //     let cats;
    //     fetch('/cats').then(data => data.json()).then(cats => {
    //         const allCats = []
    //         Object.values(cats).forEach(cat => {
    //             allCats.push(new CatCard(cat))
    //         })
    //         // catsDiv.append(new CatCard())
    //         catsDiv.append(...allCats)
    //     })
    // })
    // async/await
    fetchButton.addEventListener("click", async e => {
        const catsDiv = document.querySelector(".cats-div")
        const data = await fetch('/cats')
        const cats = await data.json()
        const allCats = []
        Object.values(cats).forEach(cat => {
            allCats.push(new CatCard(cat))
        })
        // catsDiv.append(new CatCard())
        catsDiv.append(...allCats)
    })


    const addButton = document.querySelector("#cats-form-button")
    addButton.addEventListener("click", e => {
        const newCats = document.querySelector(".new-cats")
        newCats.append(new CatForm())
        addButton.style.visibility = "hidden";
    })
});