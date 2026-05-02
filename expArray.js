//exp 1
let arr1 = [1, 2, 3];
//add number 4 in last arr
console.log("exp1");
arr1.push(4);
console.log(arr1);
function exp1 (arr, element){
    arr[arr.length] = element;
    return arr.length;
}
console.log(exp1(arr1, 99));
console.log(arr1);

//exp2
console.log("exp2");
let arr2 = [10, 20, 30, 40];
//remove last number in arr2
arr2.pop();
console.log(arr2);
function exp2(arr){
    let element = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return element;
}
console.log(exp2(arr2));
console.log(arr2);

//exp3
let arr3 = [5, 6, 7];
console.log("exp3");
//add number 4 in first arr
arr3.unshift(4);
console.log(arr3);
function exp3(arr, element){
    let newArr = [];
    newArr[0] = element;
    for(let i = 0; i < arr.length; i++){ //length = 3, run 0 1 2
        newArr[i + 1] = arr[i];
    }
    arr.length = 0;
    for(let i = 0; i < newArr.length; i++){
        arr[i] = newArr[i];
    }
    return newArr.length;
}
console.log(exp3(arr3, 3));
console.log(arr3);

//exp4
let arr4 = [100, 200, 300];
// remove first number in arr
console.log("exp4");
arr4.shift();
console.log(arr4);
function exp4(arr){
    let newArr = [];
    let element = arr[0];
    for(let i = 1; i < arr.length; i++){
        newArr[i - 1] = arr[i];
    }
    arr.length = 0;
    for(let i = 0; i < newArr.length; i++){
        arr[i] = newArr[i];
    }
    return element;
}
console.log(exp4(arr4));
console.log(arr4);

//exp5
let arr5 = [1, 2, 3];
console.log("exp5");
//add number 0 in first, add number 4 in last, remove number first, remove number last
arr5.unshift(0);
arr5.push(4);
arr5.shift();
arr5.pop();
console.log(arr5);

//exp6
console.log("exp6");
let arr6 = [];
//add number 1, 2, 3 in last, remove first number, add number 0 in first
arr6.push(1, 2, 3);
arr6.shift();
arr6.unshift(0);
console.log(arr6);


