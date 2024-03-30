function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let change = cash - price;

    let totalCID = 0;
    for (let [_, amount] of cid) {
        totalCID += amount;
    }
    totalCID = Math.round(totalCID * 100) / 100;

    if (change > totalCID) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (change.toFixed(2) === totalCID.toFixed(2)) {
        return {status: "CLOSED", change: cid};
    }

    let changeArray = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        const currency = cid[i][0];
        const value = currencyUnit[currency];
        let amountAvailable = cid[i][1];
        let numNeeded = Math.floor(change / value);
        let numToUse = Math.min(numNeeded, amountAvailable / value);
        let subtotal = numToUse * value;
        if (numToUse > 0) {
            changeArray.push([currency, subtotal]);
            change -= subtotal;
            change = Math.round(change * 100) / 100;
        }
    }

    if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
        return {status: "OPEN", change: changeArray};
    }
}

function calculateChange() {
    const price = parseFloat(document.getElementById("price").value);
    const cash = parseFloat(document.getElementById("cash").value);
    const cid = [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ];

    const result = checkCashRegister(price, cash, cid);
    const resultElement = document.getElementById("result");

    if (result.status === "INSUFFICIENT_FUNDS") {
        resultElement.textContent = "Insufficient funds";
    } else if (result.status === "CLOSED") {
        resultElement.textContent = "Closed. Change: " + JSON.stringify(result.change);
    } else {
        resultElement.textContent = "Open. Change: " + JSON.stringify(result.change);
    }
}