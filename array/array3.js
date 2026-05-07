// ||| ARRAY METHOD: FIND - SOME - REDUCE ||| //
//Some
console.log('Some');
let arrSome = [1, 2, 3, 4, 5, 18, 31, 32];
let resultArrSome = arrSome.some(item => item > 31); // Duyệt mảng, 1 điều kiện thỏa => true, tất cả không thỏa => false
console.log(arrSome);
console.log(resultArrSome);

//Find
console.log('Find');
let arrFind = [10, 18, 20, 30, 40];
let resultArrFind = arrFind.find(item => item >= 18); // Lấy phần tử đầu tiên thỏa điều kiện
console.log(arrFind);
console.log(resultArrFind);

//Reduce
console.log('Reduce');
let arrReduce = [1, 2, 3, 4, 5];
let resultArrReduce = arrReduce.reduce((total, num) => total + num, 5);

//Cú pháp
arrReduce.reduce(function(accumulator, currentValue) { //acc là biến tích lũy, lưu kết quả mỗi lần lặp
    //current phần tử hiện tại của mảng trong mỗi lần lặp
    //initial giá trị ban đầu của acc || vd: 0 {} [] ''

}, 0)

//
console.log(arrReduce);
console.log(resultArrReduce);

// bài tập: điếm số lần xuất hiện
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

const count = fruits.reduce((acc, fruit) => {

    if(acc[fruit]) {
        acc[fruit]++;
    } else {
        acc[fruit] = 1;
    }

    return acc;

}, {});
/*  0: ban đầu là { rỗng }
    1: else {acc[apple] = 1 => {apple: 1} }
    2: else {acc[banana] = 1 => {apple: 1, banana = 1,} }
    3: if {acc[apple] = 1++ => {apple: 2, banana = 1} }
    4: else {acc[orange] = 1 => {apple: 2, banana = 1, orange = 1} }
    5: if {acc[banana] = 1++ => {apple: 2, banana = 2, orange = 1} }
*/
console.log(count);

// Bài tập 2: biến arr thành object
const users = [
    { id: 1, name: 'Dung' },
    { id: 2, name: 'An' }
];

//biến thành
/*
    {
        1: { id: 1, name: 'Dung' },
        2: { id: 2, name: 'An' }
    }
*/
const result = users.reduce((acc, user) => {
    acc[user.id] = user; // 1 = {...} của object array user thứ 0
    return acc;
}, {})

console.log(result);

//Bài tập: reduce để group data: kiểu như object có các member cùng tuổi 22 đi, thì mình lọc ra những người có cùng tuổi với nhau

const usersGroup = [
  { name: 'Dung', age: 20 },
  { name: 'An', age: 20 },
  { name: 'Minh', age: 22 }
];
/* trả về
    {
        20: [ {...}, {...} ]
        22: [ {...}, {...} ]
    }

*/
const resultGroupAge = usersGroup.reduce((acc, user) => {
    if(!acc[user.age]){ //Chưa có thì lụm, lần đầu rỗng, hoặc chưa có đối tượng nào cùng tuổi được tạo
        acc[user.age] = []; // tạo ra mảng rỗng, vd: 20: [rỗng] || quan trọng: tạo group
    }

    acc[user.age].push(user); //lần đầu rỗng => push vào: 20: [{...}] hoặc đã có rồi => push vào 20: [{...}, {...}];
    return acc;
}, {});

console.log(resultGroupAge);