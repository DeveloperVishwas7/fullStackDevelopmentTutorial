document.querySelector('.js-btn-convert').addEventListener('click',()=>{
    const inputElement = document.querySelector('.js-input-value');
    let value = Number(inputElement.value);
    const html = `
        <section class="section">
            <h2>Length (Meter/Feet)</h2>
            <p>${value} meters = ${meterToFeet(value)} feet | ${value} feet = ${feetToMeter(value)} meters</p>
        </section>

        <section class="section">
            <h2>Volume (Liters/Gallons)</h2>
            <p>${value} liters = ${literToGallons(value)} gallons | ${value} gallons = ${gallonToLiters(value)} liters</p>
        </section>

        <section class="section">
            <h2>Mass (Kilograms/Pounds)</h2>
            <p>${value} kilos = ${kgToPounds(value)} pounds | ${value} pounds = ${poundsToKGs(value)} kilos</p>
        </section>
    `
    
    document.querySelector('.js-show-result').innerHTML = html;
    inputElement.value = '';
})

function meterToFeet(value){
    return (value*3.28084).toFixed(3);
}

function feetToMeter(value){
    return (value*0.3048).toFixed(3);
}

function literToGallons(value){
    return (value*0.264172).toFixed(3);
}
function gallonToLiters(value){
    return (value*3.78541).toFixed(3);
}
function poundsToKGs(value){
    return (value*0.453591830542594).toFixed(3);
}
function kgToPounds(value){
    return (value*2.20462).toFixed(3);
}