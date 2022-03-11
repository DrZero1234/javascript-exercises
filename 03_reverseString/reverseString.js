const reverseString = function(string) {
    i = string.length-1
    reversed = "";
    for (i; i >= 0;i--) {
        reversed += string[i];
    }
    return reversed;

    // Jobb megoldás
    
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
