
function checkPalindrome() {
    let str = document.getElementById('inputString').value;
    let allsy = /[ ,.*#_$@!%^&()+=/;:?<>-]/g;
    str = str.toLowerCase().replace(allsy, '');

    let all = str.split('');
    let reversed = [];

    for (let i = all.length - 1; i >= 0; i--) {
        reversed.push(all[i]);
    }

    let result = document.getElementById('result');
    if (reversed.join('') === str) {
        result.innerText = 'Yes, it\'s a palindrome!😊';
    } else {
        result.innerText = 'No, it\'s not a palindrome.😔';
    }
    
    
}