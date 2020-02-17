function lowerCaseDrivers(array) {
    return array.map(function(driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(array) {
    return array.map(function(driver){
        return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
    })
}

function attributesToPhrase(arrayOfObjects) {
    return arrayOfObjects.map(function(object){
        `${object.name} is from ${object.hometown}`
    })
}