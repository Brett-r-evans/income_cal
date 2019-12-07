
let stateVal, schedualVal, structureVal
let wageVal, hoursWorked, gross, net, trueValue, taxRate



function getValues() {
    stateVal = document.getElementById("state-select").value
    schedualVal = document.getElementById("paySchedual").value
    structureVal = document.getElementById("payStructure").value
    wageVal = document.getElementById("wageInt")
    hoursWorked = document.getElementById("hours")

    console.log(stateVal)
    console.log(schedualVal)
    console.log(structureVal)
    console.log(wageVal)
    console.log(hoursWorked)
}

document.getElementById("submit").addEventListener(onclick, getValues)
