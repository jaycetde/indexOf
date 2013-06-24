module.exports = function (arr, search) {
    var match;
    for (var i = 0, l = arr.length, prop; i < l; i += 1) {
        match = true;
        if (arr[i] === search) return i;
        for (prop in search) {
            if (!arr[i][prop] || arr[i][prop] !== search[prop]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }
    return -1;
};