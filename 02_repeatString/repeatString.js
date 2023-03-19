const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';

    let output = '';
    let i = 0;
    for (i; i < num; i++) {
        output += string;
    }
    
    return output;
};

// Do not edit below this line
module.exports = repeatString;
