exports.min = function min(array) {
    if (!array ||  !array.length) {
        return 0;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

exports.max = function max(array) {
    if (!array ||  !array.length) {
        return 0;
    }
    let maxim = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxim) {
            maxim = array[i];
        }
    }
    return maxim;
};

exports.avg = function avg(array) {
    
    if (!array ||  !array.length) {
        return 0;
    }
    
    let sum = 0;
    for (i = 0; i < array.length; i++) {

        sum += array[i];
    }

    return sum / array.length;
};
