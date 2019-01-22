findTwo();

function findTwo(array) {
var array = [];

for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 11));
}
    console.log(array);
    console.log(array.includes(2));
};
