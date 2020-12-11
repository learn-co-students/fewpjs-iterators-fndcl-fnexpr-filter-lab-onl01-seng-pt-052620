// Code your solution here
function findMatching(drivers, name){
    const list = drivers.filter(people => people.toLowerCase() === name.toLowerCase())
    return list
}

function fuzzyMatch(drivers, letters){
    const list = drivers.filter(people => people.startsWith(letters))
    return list
}

function matchName(drivers, name){
    const list = drivers.filter(people => people.name === name)
    return list
}