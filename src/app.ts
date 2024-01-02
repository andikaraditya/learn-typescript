// const anchor = document.querySelector("a")!

// console.log(anchor.href)

const form = document.querySelector(".new-item-form") as HTMLFormElement

// console.log(form.children)

const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(({
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    }))
})