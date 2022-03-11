const removeFromArray = function(arr) {
    var args = [].slice.call(arguments).slice(1);
    for (del_item of args) {
        let item_index = arr.indexOf(del_item);
        if (item_index > -1) {
            arr.splice(item_index, 1);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
