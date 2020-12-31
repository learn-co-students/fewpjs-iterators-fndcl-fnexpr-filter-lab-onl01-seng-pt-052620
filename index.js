const { match } = require("sinon")

// Code your solution here

function findMatching(driver, name) {
    return driver.filter(match => 
        match.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driver, name) {
    return driver.filter(match =>
        match.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

function matchName(data, name) {
    return data.filter(match =>
        match.name === name)
}