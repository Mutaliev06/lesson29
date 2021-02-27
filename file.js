// Задание 1
let arr_1 = [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];
let superArr = [...arr_1, ...arr_2];
console.log(superArr);

//Задание 2
console.log(Math.min(...superArr));

//Задание 3
let obj = {
    width: 300,
    height: 550
};

let newObj = {
    ...obj,
    area: function (item){
        return this.width * this.height;
    }
};
console.log(newObj);

//Задание 4
function f(...rest) {
    rest.reduce(function(sum, item){
        return sum + item;
    }, 0)
}
let a = f(10, 20, 30)
console.log(a);
