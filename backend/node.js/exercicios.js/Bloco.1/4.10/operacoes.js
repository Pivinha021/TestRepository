function fahrenheit (celsius){
    return (celsius * 9/5) + 32;
}

function kelvin (celsius){
    return celsius + 273.15;
}

module.exports = {
    fahrenheit,
    kelvin
}