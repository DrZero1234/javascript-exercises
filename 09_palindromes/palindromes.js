const palindromes = function (string) {
  let alpha_string = "";
  for (let i = 0;i < string.length;i++) {
      if (string[i].toLowerCase() != string[i].toUpperCase()) {
          alpha_string+= String(string[i])
      }
  }
  console.log(alpha_string)

  reversed = alpha_string.split("").reverse().join("");
  return alpha_string.toLowerCase() === reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
