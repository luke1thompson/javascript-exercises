const palindromes = function (input) {
    const clean = cleanString(input);
    const length = clean.length;
    const range = Math.floor(length / 2);
    
    for (let i = 0; i < range; i++) {
        if(clean[i] != clean[length - i - 1]) {
            return false;
        }
    }

    return true;
};

const cleanString = function (input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i].match(/[a-zA-Z]/)) {
            output += input[i];
        }
    }
    return output.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
