// Code your solution here
  
function findMatching(array, input) {
return array.filter( possibleMatch =>
    possibleMatch.toLowerCase() === input.toLowerCase()
    )
}

function fuzzyMatch(array, testString) {
return array.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}

function matchName(array, inputName) {
return array.filter( record => record.name === inputName)
}