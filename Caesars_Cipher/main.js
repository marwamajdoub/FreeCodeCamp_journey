document.getElementById("decodeButton").addEventListener("click", rot13);

function rot13() {
    let encodedText = document.getElementById("encodedText").value;
    let decodedText = "";
    for (let i = 0; i < encodedText.length; i++) {
        let char = encodedText[i];
        if (char.match(/[A-Z]/)) {
            let charCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
            let decodedCharCode = (charCode - 13 + 26) % 26;
            let decodedChar = String.fromCharCode(decodedCharCode + 'A'.charCodeAt(0));
            decodedText += decodedChar;
        } else {
            decodedText += char;
        }
    }
    document.getElementById("decodedText").innerText = decodedText;
}