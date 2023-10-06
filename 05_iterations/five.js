//frEach 

const langs = ['Python', 'Javascript', 'Java'];

langs.forEach(function(lang, index, array) {
    // console.log(lang, index, array);
});


langs.forEach( (val) => {
    console.log(val.toLocaleUpperCase());
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )