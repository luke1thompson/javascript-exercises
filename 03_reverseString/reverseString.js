const reverseString = function(string) {
    let backString = "";
    let i = string.length - 1;
    for (i; i >= 0; i--) {
        backString += string.charAt(i);
    }

    return backString;
};

// Do not edit below this line
module.exports = reverseString;
