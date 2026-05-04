//Array.isArray(...); true or false;
let isArr = [1, 2, 3, 4];
//check arr is type of Array and result true or false
console.log(Array.isArray(isArr));

//Delete
let arrDelete = ['a', 'b', 'c', 'd'];
//delete and change element was deleted to undefined
console.log(delete arrDelete[0]);
console.log(arrDelete);
console.log(arrDelete.length);

//Concat
let arrConcat1 = [1, 2, 3, 4];
let arrConcat2 = ['a', 'b', 'c', 'd'];
const arrConcatAll = arrConcat1.concat(arrConcat2);
//Add two array to one large array 
console.log(arrConcatAll);
console.log(arrConcatAll.length);

