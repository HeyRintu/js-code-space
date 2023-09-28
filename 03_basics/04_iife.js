// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`its me IIFE`);
})();



(
    (name) => {
        console.log(`hey there Mr.${name}`);
    }
)('Faryhunter')