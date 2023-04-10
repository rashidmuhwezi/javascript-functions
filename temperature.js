function toCelsius(fahrenheit) {
    const conversion = (5/9) * (fahrenheit-32);
    return fahrenheit + " degrees fahrneheit is equal to " + conversion + " degrees celsius";
}
console.log(toCelsius(120));

console.log(toCelsius(77));