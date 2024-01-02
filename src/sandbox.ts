console.log("Typescript")

function circ(diameter:number) {
    return diameter * Math.PI
}

console.log(circ(20))

const names: string[] = []
names.push("John")
names.push("Jack")

console.log(names)

const ages: number[] = []   
ages.push(20)
ages.push(25)

console.log(ages)

const mixed: (string|number)[] = []
mixed.push("John")
mixed.push(20)

console.log(mixed)

let ninja: {
    name: string,
    age: number,
    beltColor: string
}

ninja = {
    name: "jack",
    age: 20,
    beltColor: "black"
}

console.log(ninja)

console.log("new workflow")

type Person = {
    name: string,
    age: number
}

function greet(person:Person) {
    console.log(`hello my name is ${person.name}, I am ${person.age} years old`)
}

const jack: Person = {
    name: "Jack",
    age: 20
}

greet(jack)