function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }

    return roman;
}

function convertAndDisplay() {
    const numberInput = document.getElementById('number');
    const resultDisplay = document.getElementById('result');
    const inputValue = parseInt(numberInput.value);

    if (!isNaN(inputValue)) {
        const romanNumeral = convertToRoman(inputValue);
        resultDisplay.innerText = romanNumeral;
    } else {
        resultDisplay.innerText = "Please enter a valid number.";
    }
}