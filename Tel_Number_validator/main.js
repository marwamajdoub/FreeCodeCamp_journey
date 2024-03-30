function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById('phoneNumber').value.trim();
    const resultDisplay = document.getElementById('result');
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if (regex.test(phoneNumberInput)) {
        resultDisplay.innerText = "✅ Valid US phone number!";
    } else {
        resultDisplay.innerText = "❌ Invalid US phone number. Please enter a valid format.";
    }
}