// Code your solution in this file.
function lowerCaseDrivers(arr) {
    return arr.map(driver => driver.toLowerCase())
}

function nameToAttributes(arr) {
    return arr.map(
        function(driver) {
            let namesplit = driver.split(" ")
            return {firstName: namesplit[0], lastName:namesplit[1]}
        }
    )
}

function attributesToPhrase(arr) {
    return arr.map(driver => `${driver.name} is from ${driver.hometown}`)
}