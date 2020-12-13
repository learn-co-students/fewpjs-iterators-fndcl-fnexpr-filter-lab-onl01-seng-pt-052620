const { stringContaining } = require("expect");

function findMatching(drivers, name) {
    return drivers.filter(o => o.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, test) {
    return drivers.filter(o => o.toLowerCase().indexOf(test.toLowerCase()) === 0);
}

function matchName(drivers, name) {
    return drivers.filter(o => o.name === name);
}