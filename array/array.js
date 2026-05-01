let arrNumber = [1, 2, 3, 4, 5, 6, 7];
let arrString = ['a', 'b', 'c', 'd', 'e', 'f', 'z'];
let arr = [1, 2, 3, 'a', 'b', 'c'];
let arrObj = [
    {
        id: 1,
        name: 'Alex',
        job: 'Driver'
    },
    {
        id: 2,
        name: 'Tony',
        job: 'Student'
    },
    {
        id: 3,
        name: 'Naruto',
        job: 'Ninja'
    }
]

let arrAll = [
    1, 2, 3,
    'a', 'b', 'c', 
    {
        id: 1,
        rank: 'a'
    },
    {
        id: 2,
        rank: 's'
    }
]

//exercises
console.log(arrNumber);
console.log(arrString);
console.log(arr);
console.log(arrObj);
console.log(arrAll);
//
console.log('Array method');
console.log(arrNumber.toString() + '.toString()'); //thay doi gia tri mang thanh kieu string
console.log(arrNumber.at(5) + '.at()'); //lay phan tu mang tai vi tri thu at()
console.log(arrNumber.join('-') + '.join()'); //them noi dung vao giua cac phan tu mang, khong them dau va cuoi

//POP
console.log('Array pop');
arrPop = arrNumber.pop(); //lay gia tri phan tu mang cuoi cung, dong thoi xoa phan tu cuoi trong mang
console.log(arrPop); //xuat gia tri mang cuoi da tach ra man hinh
console.log(arrNumber); //mang ban dau thay doi, mat di phan tu mang cuoi cung

//PUSH
console.log('Array push');
let arrPushLength = arrNumber.push(18); //them 1 pt va tra ve do dai mang
console.log(arrPushLength); //xuat do dai mang hien tai sau khi them phan tu
console.log(arrNumber); //xuat mang hien tai sau khi them 1 phan tu

//
function pop(arr){
    let arrLength = arr[arr.length - 1];
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        newArr[i] = arr[i];
    }
    //gán lại
    arr.length = 0;
    for(let i = 0; i < newArr.length; i++){
        arr[i] = newArr[i];
    }
    return arrLength;
}
console.log("Pop function: " +  pop(arrNumber));
console.log(arrNumber);

//
function push(arr, element){ //thêm 1 pt vào cuối mảng, trả về độ dài mới của mảng
    arr[arr.length] = element;
    return arr.length;
}

console.log("Push function: " + push(arrNumber, 18));
console.log(arrNumber);









