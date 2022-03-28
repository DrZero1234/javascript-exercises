const fibonacci = (num = 1) => {
    if (num < 0) {
        return "OOPS"
    }else {
        const series = [1, 1];
        for (let i = 2; i < num; i++) {
           const a = series[i - 1];
           const b = series[i - 2];
           series.push(a + b);
        };
        return series[num - 1];
    }

 };
 

// Do not edit below this line
module.exports = fibonacci;
