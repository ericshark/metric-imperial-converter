/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById('output-1')
const volumeEl = document.getElementById('output-2')
const massEl = document.getElementById('output-3')
const btnEl = document.getElementById('btn')
const inputEl = document.getElementById('input')
const toggleEl = document.getElementById('toggle-dark')

btnEl.addEventListener("click", function(){
    addOutput(inputEl.value)
})

function addOutput(value){
    lengthEl.textContent = `${value} meters = ${feetC(value)} feet | ${value} feet = ${metersC(value)} meters`
    volumeEl.textContent = `${value} liters = ${gallonC(value)} gallons | ${value} gallons = ${litersC(value)} liters `
    massEl.textContent = `${value} kilos = ${poundsC(value)} pounds | ${value} pounds = ${kilosC(value)} kilos`
}

function feetC(value){
    return (value*3.280839895).toFixed(3)
}
function metersC(value){
    return (value/3.280839895).toFixed(3)
}

function gallonC(value){
    return (value*0.264).toFixed(3)
}
function litersC(value){
    return (value/0.264).toFixed(3)
}
function poundsC(value){
    return (value*2.204).toFixed(3)
}
function kilosC(value){
    return (value/2.204).toFixed(3)
}

