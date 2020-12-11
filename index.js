

function findMatching(array, str) {
    return array.filter( name => name.toLowerCase() === str.toLowerCase() )
} 

function fuzzyMatch(array, str) {
    return array.filter( name => (
        name.toLowerCase()[0] === str.toLowerCase()[0] && name.toLowerCase()[1] === str.toLowerCase()[1]
        ))
    // return filteredName
}

function matchName(array, str) {
    return array.filter( name => ( name.name === str ))
}

