// let regExp = /^[a-z]{6}@algum\.com.br$/;
// let regExp = /^[a-z]+@algum\.com.br$/;
// let regExp = /^[a-z]+@[a-z]+\.com.br$/;
// let regExp = /^\w+@\w+\.\w{2,3}.br$/;
// let regExp = /^\w+@\w+(\.\w{2,3})+$/;
// let regExp = /^(\w+)@(\w+)((\.\w{2,3})+)$/;
let regExp = /^(\w+)@(\w+(\.\w{2,3})+)$/;
// let rexExpN = new RegExp("fulano@algum.com.br");
let result = regExp.exec("funo@algum.com.br");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result.index);
console.log(result.input);

// ^ forces beginning
// $ - forces end
// {} - defines quantities
// {n} - specific number
// {n,} - minimum number
// {n,m} - minimum and maximum numbers
// ? - zero or one
// * - zero or more
// + - one or more
// [] - delimits groups of chars
// In groups of chars:
// ^ - negates expression
// \w - represents [a-zA-Z0-9]
// \W - represents [^a-zA-Z0-9]
// \d - represents [0-9]
// \D - represents [^0-9]
// \s - represents one white space
// \S - represents one not white space
// \n - represents a new line
// \t - represents a tab
