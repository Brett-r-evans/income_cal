function roundVals (number) {
    Math.ceil(number * 100)/100
}


let stateVal, schedualVal, structureVal
let wageVal, hoursWorked, grossVal, netVal, truePercent, trueVal, taxRate



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
            var paygross = (wageVal * hoursWorked) * 4 
            grossVal = paygross * 12
        } else if (schedualVal === "week" || schedualVal === "biWeek") {
            grossVal = (wageVal * hoursWorked) * 52
        } else {
            alert("you have to fill all stared form items")     
        }
    } else {
        alert("you have to fill all stared form items")
    }

    Math.round(grossVal * 100)/100
    console.log("your total gross income is: " + grossVal + "$")
    document.getElementById("grossField").innerHTML = "$" + grossVal
    getNet()
}

function getNet() {
    
    function getFedTax () {
        if (grossVal >= 510300) {
            fedTax = 0.37
        } else if (grossVal >= 204101) {
            fedTax = 0.35
        } else if (grossVal >= 160726) {
            fedTax = 0.32
        } else if (grossVal >= 84201) {
            fedTax = 0.24
        } else if (grossVal >= 39476) {
            fedTax = 0.22
        } else if (grossVal >= 9701) {
            fedTax = 0.12
        } else {
            fedTax = 0.10
        }
        return fedTax     
    }

    function getStateTax() {
        if (stateVal == "alabama") {
            if (grossVal >= 3001) {
                stateTax = 0.05
            } else if (grossVal >= 501) {
                stateTax = 0.04
            } else {
                stateTax = 0.02
            }
        } else if (stateVal == "california") {
            if (grossVal >= 572981) {
                stateTax = 0.123
            } else if (grossVal >= 343789) {
                stateTax = 0.113
            } else if (grossVal >= 286493) {
                stateTax = 0.103
            } else if (grossVal >= 56086) {
                stateTax = 0.093
            } else if (grossVal >= 44378) {
                stateTax = 0.08
            } else if (grossVal >= 31970) {
                stateTax = 0.06
            } else if (grossVal >= 20256) {
                stateTax = 0.04
            } else if (grossVal >= 8545) {
                stateTax = 0.02
            } else {
                stateTax = 0.01
            }
        } else if (stateVal == "colorado") {
            stateTax = 0.0463
        } else if (stateVal == "navada") {
            stateTax = 0
        } else {
            alert ("state field not filled")
        }
        return stateTax
    }
    
    taxRate = getFedTax() + getStateTax()

    console.log("taxrate: " + taxRate)

    let taxMonVal = grossVal * taxRate
    netVal = grossVal - taxMonVal 

    Math.round(netVal * 100) / 100
    console.log("your annual net is: " + netVal)
    document.getElementById("netField").innerHTML = "$" + netVal
    getTrueValue()
}

function getTrueValue() {
    if (stateVal == "alabama") {
        truePercent = 1.1534
    } else if (stateVal == "california") {
        truePercent = 0.8711
    } else if (stateVal == "colorado") {
        truePercent = 0.9660
    } else if (stateVal == "navada") {
        truePercent = 1.0246
    }
    trueVal = netVal * truePercent

    trueVal = Math.floor(trueVal)
    console.log("the true value is:" + trueVal) 
    document.getElementById("trueField").innerHTML = "$" + trueVal
}






























document.addEventListener('DOMContentLoaded', init)