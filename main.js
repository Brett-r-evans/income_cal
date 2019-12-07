
let stateVal, schedualVal, structureVal
let wageVal, hoursPerWeek, grossVal, netVal, trueVal, taxRate

function init() {
    document.getElementById('submit-button').addEventListener("click", getValues)
}


function getValues() {
    stateVal = document.getElementById("state-select").value
    schedualVal = document.getElementById("paySchedual").value
    structureVal = document.getElementById("payStructure").value
    wageVal = document.getElementById("wageInt").value
    hoursWorked = document.getElementById("hours").value

    console.log(stateVal)
    console.log(schedualVal)
    console.log(structureVal)
    console.log(wageVal)
    console.log(hoursWorked)
    
    getGross()
}

function getGross () {
    if (structureVal === "salary") {
        if (schedualVal === "month") {
            grossVal = wageVal * 12
            
        } else if (schedualVal === "biWeek") {
            grossVal = wageVal * 26
                
        } else if (schedualVal === "week") {
            grossVal = wageVal * 52
        } else {
            alert("you have to fill all stared form items")
        }
    } else if (structureVal === "hourly") {
        if (schedualVal === "month") {
            grossVal = ((wageVal * hoursPerWeek) * 3.5) * 12
        } else if (schedualVal === "biWeek") {
            grossVal = ((wageVal * hoursPerWeek) * 2) * 26
        } else if (schedualVal === "week") {
            grossVal = (wageVal * hoursWorked) * 52
        } else {
            alert("you have to fill all stared form items")     
        }
    } else {
        alert("you have to fill all stared form items")
    }

    console.log("your total gross income is: " + grossVal + "$")
    document.getElementById("grossField").innerHTML = "$" + grossVal
    getNet(grossVal)
}

function getNet(gross) {


    getTrueValue(netVal)
}

function getTrueValue(net) {
    
}






























document.addEventListener('DOMContentLoaded', init)