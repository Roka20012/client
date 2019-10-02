const flatArr = arr =>
    arr.reduce(
        (acum, el) => [...acum, ...(Array.isArray(el) ? flatArr(el) : [el])],
        []
    );

let arr2 = [1, 2, [3]];
let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10];

console.log("flatArr is", flatArr(arr));
console.log("flatArr is", flatArr(arr2));
