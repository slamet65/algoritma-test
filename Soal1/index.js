const string = "NEGIE1";

reverseAlphabet(string);

function reverseAlphabet(str) {
    let n = str.length
    let alphabet = ""
    let numeric = ""
    for (let i = 0; i < n; i++) {
        if (isNumeric(str[i])) {
            numeric += str[i]
        }else{
            alphabet += str[i]
        }
    }

    let reversed = ""
    let x = alphabet.length
    for (let i = x - 1; i >= 0; i--) {
        reversed += alphabet[i]
    }

    console.log(reversed+numeric)
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }