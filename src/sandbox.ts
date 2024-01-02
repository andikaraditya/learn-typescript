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