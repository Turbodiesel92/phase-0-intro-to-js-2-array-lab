const cats = ["Milo", "Otis", "Garfield"]

function beforeEach() {
    cats.length = 0
    cats.push("Milo",  "Otis", "Garfield")
}

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    const lastCat = [
        ...cats.slice(),
        "Broom",
        ...cats.slice(3)
    ]
    return lastCat
}

function prependCat() {
    const firstCat = [
        "Arnold",
        ...cats
    ]
    return firstCat
}

function removeLastCat() {
    const unchangedLastCat = cats.slice(0, 2)
    return unchangedLastCat
}


function removeFirstCat() {
    const unchangedFirstCat = cats.slice(1)
    return unchangedFirstCat
}