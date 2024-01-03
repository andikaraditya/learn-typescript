import { Invoice } from "./class/invoice.js";
import { Payment } from "./class/Payment.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// const invOne = new Invoice("Jack", "Dinner", 30)
// console.log(invOne.format())
// interface Person {
//     name: string,
//     age: number,
//     speak(a: string): void,
//     spend(a: number): number
// }
// const jack: Person = {
//     name: "Jack",
//     age: 40,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         return amount
//     }
// }
// function greetPerson(person:Person) {
//     console.log(`Hello ${person.name}`)
// }
// greetPerson(jack)
let docOne;
let docTwo;
docOne = new Invoice("Yoshi", "dinner", 50);
docTwo = new Payment("Mario", "lunch", 20);
const docs = [];
docs.push(docOne);
docs.push(docTwo);
