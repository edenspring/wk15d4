export class CatCard {
    constructor(content){
        this.generateCat(content)
        return this.cat;
    }
    
    generateCat({name, ...content}){
        this.cat = document.createElement('div')
        const attribs = []
        const nameDiv = document.createElement('div')
        nameDiv.innerHTML=`<h1>${name}</h1>`
        attribs.push(nameDiv)
        const list = document.createElement("ul")
        Object.entries(content).forEach(([key, val])=>{
            const li = document.createElement("li")
            li.innerText = `${key} : ${val}`
            list.append(li)
        })
        attribs.push(list)
        this.cat.append(...attribs)
    }
}

export class CatForm {
    constructor(){
        this.generateForm();
        return this.formDiv;
    }
    generateForm(){
        this.formDiv = document.createElement("div")
        this.formDiv.classList.add("cat-form")
        const form = document.createElement("form")
        form.classList.add("cat-maker")
        const attribs = ["name","color","furLength","hasTail","isGoodKitty","isChonky"]
        attribs.forEach(attribute=>{
            const label = document.createElement("label")
            label.for=attribute;
            label.innerText=attribute
            const input = document.createElement("input")
            input.type = "text";
            input.innerText;
            input.name=attribute;
            form.append(label, input, document.createElement("br"))
        })
        const submit = document.createElement("button")
        submit.type="submit"
        submit.innerText = "SUBMIT"
        submit.addEventListener("click", e=>{
            e.preventDefault()
            const catForm =document.querySelector(".cat-maker");
            const formData = new FormData(catForm)
            const formObject = {};
            formData.forEach((value, key)=>formObject[key]=value)
            document.querySelector(".cats-div").append(new CatCard(formObject))
            document.querySelector("#cats-form-button").style.visibility="visible"
            document.querySelector(".cat-form").remove()
        })
        const cancel = document.createElement("button")
        cancel.innerText = "CANCEL"
        cancel.addEventListener("click", e=>{
            document.querySelector(".cat-form").remove()
            document.querySelector("#cats-form-button").style.visibility="visible"
        })
        form.append(submit)
        form.append(cancel)
        this.formDiv.append(form)
    }
}