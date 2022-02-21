// UNIT CONVERSION
const input = document.getElementById("input");
const log = document.querySelector(".value-input-feet");
const gall = document.querySelector(".value-input-gall");
const pounds = document.querySelector(".value-input-pounds"); 


input.addEventListener('change', (e) => {
    let value = e.target.value;
    let valueFeet = (value * 3.28084).toFixed(3);
    let valueMet = (value * 0.3048).toFixed(3); 
    log.textContent = value + " meters" + " = " + valueFeet + " feet" + " | " + value + " feet" + " = " + valueMet + " meters";
});
input.addEventListener('change', (e) => {
    let value = e.target.value;
    let valueGall = (value * 0.264172).toFixed(3);
    let valueLit = (value * 3.78541).toFixed(3);
    gall.textContent = value + " liters" + " = " + valueGall + " gallons" + " | " + value + " gallons" + " = " + valueLit + " liters";
});
input.addEventListener('change', (e) => {
    let value = e.target.value;
    let valuePounds = (value * 2.20462).toFixed(3);
    let valueKilo = (value * 0.453592).toFixed(3);
    pounds.textContent = value + " kilos" + " = " + valuePounds + " pounds" + " | " + value + " pounds" + " = " + valueKilo + " kilos";
});


