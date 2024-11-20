let pw = document.getElementById('pwText')

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let symbols = ["@", '!', '?', '&', '*', '^', '<', '>'];
// Vars for pw generating
let newLetters;
let newPW = [];
let newPWS = [];
let newPWN = [];
let password = [];


// Slider things

document.getElementById('chars').onchange = function () {
    document.getElementById('charNumber').innerHTML = this.value;
}

document.getElementById('symbols').onchange = function () {
    document.getElementById('charSymbol').innerHTML = this.value;
}

document.getElementById('numbers').onchange = function () {
    document.getElementById('numberCount').innerHTML = this.value;
}





document.getElementById('generate').addEventListener('click', () => {
    let charCount = document.getElementById('chars').value
    
    let symbCount =  document.getElementById('symbols').value
    let numCount =  document.getElementById('numbers').value
    let pwCheck = Number(charCount) + Number(symbCount) +  Number(numCount)
    console.log(pwCheck);
    pwCheck < 8 ? alert('Make sure there are at least 8 symbols') : generatePw(charCount,symbCount,numCount)
    document.getElementById('totalChars').innerHTML = 'Total symbols: '+  pwCheck;
})


function generatePw(totals,symb,numbers) {
    pw.value = ''
    let i = 0;
    let y = 0;
    let z = 0;

    // Create Arr of random letters
    while (i < totals ) {
        let random = Math.floor(Math.random() * letters.length)
        let randomUp = Math.floor(Math.random() * newPW.length)
        newPW.push(letters[random])
        newPW[randomUp] = newPW[randomUp].toUpperCase(); 
        i++
    }
    // Create Arr of random symbols
    while (y < symb) {
        let randomS = Math.floor(Math.random() * symbols.length)
        newPWS.push(symbols[randomS])
        y++
    }
    while (z < numbers){
        newPWN.push(Math.floor(Math.random() * 99))
        z++
    }
    password = newPW.concat(newPWS,newPWN).sort(() => Math.random() - 0.5)
    pw.value = password.join('')
    // Resetting values
    newPW = [];
    newPWS = [];
    newPWN = [];
    password = '';
}

