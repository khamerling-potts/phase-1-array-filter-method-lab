// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => {
        return driver.slice(0, letters.length) === letters;
    });
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string);
}