// Creating a Function:

function tempratureConverter() {
    const inputTemp = parseFloat.float(prompt("Enter the Temprature: "))
    const unit = prompt("Enter the unit (C for Celsius, F for Fahrenheit, K for Kelvin): ").toUpperCase();

    if(unit === "C"){
        console.log(`Celsius: ${inputTemp}`);
        console.log(`Fahrenheit: ${(inputTemp * 9/5) + 32}`);
        console.log(`Kelvin: ${inputTemp + 273.15}`);
    
    } else if(unit === "F"){
        console.log(`Fahrenheit: ${inputTemp}`);
        console.log(`Celsius: ${(inputTemp - 32) * 5/9}`);
        console.log(`Kelvin: ${((inputTemp - 32) * 5/9) + 273.15}`);
    }
    else if (unit === "K") {
        console.log(`Celsius: ${inputTemp - 273.15}`);
        console.log(`Fahrenheit: ${(inputTemp - 273.15) * 9/5 + 32}`);
        console.log(`Kelvin: ${inputTemp}`);
    }
}

tempratureConverter()