// Code your solution here

function findMatching(driverArray, employeeName) {
  return driverArray.filter( name => {
    return name.toLowerCase() === employeeName.toLowerCase();
  })
}

function fuzzyMatch(driverArray, searchParams) {
  return driverArray.filter( name => {
    return name.toLowerCase().startsWith(searchParams.toLowerCase());
  })
}

function matchName(driverArray, searchParams) {
  return driverArray.filter( driver => {
    return driver.name.toLowerCase() === searchParams.toLowerCase();
  })
}