// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver[0] === string[0])
}

function matchName(driver, string) {
    return driver.filter(driver => driver.name === string)
}