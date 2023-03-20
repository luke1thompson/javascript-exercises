const removeFromArray = function (array) {
    let outputArray = [];

    for (let item of array) {
        let i = 1;
        let match = false;

        for (i; i < arguments.length; i++) {
            //console.log(`testing item ${item} for match with ${arguments[i]}`);
            if (item === arguments[i]) {
                match = true;
                //console.log('Match found!')
            }
        }
        if (!match) {
            outputArray.push(item);
        }
    }

    return outputArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
