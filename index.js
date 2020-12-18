function findMatching(driver, name) {
  return driver.filter( match =>
    match.toLowerCase() === name.toLowerCase()
  )
}

function fuzzyMatch(driver, name) {
  return driver.filter( match =>
    match.toLowerCase().indexOf(name.toLowerCase()) === 0
  )
}

function matchName(driver, name) {
  return driver.filter( record => record.name === name)
}
