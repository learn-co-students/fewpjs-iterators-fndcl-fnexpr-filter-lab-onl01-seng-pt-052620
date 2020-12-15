// Code your solution here
function findMatching(drivers, string) { 
    return drivers.filter(find_name => {
        if (find_name.toLowerCase() === string.toLowerCase()) {
            return findMatching
        }
    })
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(find_name => {
        if (letter.charAt(0) === find_name.charAt(0)) {
            return find_name
        }
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (find_name) {
        if (find_name.name == name) {
            return find_name
        }
    })
}