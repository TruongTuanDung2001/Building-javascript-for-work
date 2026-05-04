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
let arrConcat3 = [{id: 1, name: 'Tomy'}, {id: 2, name:"Zidane"}];
const arrConcatAll = arrConcat1.concat(arrConcat2, arrConcat3);
//Add two array to one large array 
console.log(arrConcatAll);
console.log(arrConcatAll.length);

//foreach
console.log('foreach event');
let arrForeach = [12, 23, 33, 44, 56, 72, 99];
let arrEven = [];
//duyet tung phan tu, mang cu khong bien doi, khong tra ve mang moi
arrForeach.forEach(function(item){
    if(item % 2 == 0){
        console.log(item);
        arrEven.push(item);
    }
})
console.log(arrEven);

//map
console.log('Map');
let arrMap = [4, 9, 16, 25];
const newArrMap = arrMap.map(Math.sqrt);
//duyet tung phan tu mang, cho ra 1 mang moi
console.log(arrMap);
console.log(newArrMap);

function myFunc(num){
    return num * 10;
}
const newArrMap2 = arrMap.map(myFunc);
console.log(newArrMap2);



