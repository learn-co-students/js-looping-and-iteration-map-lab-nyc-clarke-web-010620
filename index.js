// Code your solution in this file.
function lowerCaseDrivers(drivers){

const newdrivers = drivers.map(driver => driver.toLowerCase())
return newdrivers
}
function nameToAttributes(drivers) {
    const newdrivers = drivers.map(function (eng) {
        return Object.assign({}, { firstName: eng.split(" ")[0] }, { lastName: eng.split(" ")[1] } );
    });
    return newdrivers
}
function attributesToPhrase(drivers) {

    const newdrivers = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
    return newdrivers

}