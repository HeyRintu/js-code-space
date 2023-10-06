const langs = ['Python', 'Javascript', 'Java'];

const value = langs.forEach(function(lang) {
    // console.log(lang);
    // return lang;
});
// forEach doesn't return anything
console.log(value);

const myNum = [1, 2, 3, 4, 5];

const newNum = myNum.filter( (num) => {
    return num > 3;

}
)

console.log(newNum);