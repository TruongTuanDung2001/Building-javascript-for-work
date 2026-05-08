//exp 1
let arr1 = [1, 2, 3];
//add number 4 in last arr
console.log("exp1");
arr1.push(4);
console.log(arr1);
function exp1(arr, element) {
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
function exp2(arr) {
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
function exp3(arr, element) {
    let newArr = [];
    newArr[0] = element;
    for (let i = 0; i < arr.length; i++) { //length = 3, run 0 1 2
        newArr[i + 1] = arr[i];
    }
    arr.length = 0;
    for (let i = 0; i < newArr.length; i++) {
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
function exp4(arr) {
    let newArr = [];
    let element = arr[0];
    for (let i = 1; i < arr.length; i++) {
        newArr[i - 1] = arr[i];
    }
    arr.length = 0;
    for (let i = 0; i < newArr.length; i++) {
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

//exp7
//write funcion remove last
function removeLast(arr) {
    let element = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return element;
}
let arr7 = [1, 2, 3, 4, 5, 6];
console.log("exp 7");
console.log(removeLast(arr7));
console.log(arr7);

//exp8
//write function addFirst
function addFirst(arr, e) {
    let newArr = [];
    newArr[0] = e;
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    arr.length = 0;
    for (let i = 0; i < newArr.length; i++) {
        arr[i] = newArr[i];
    }
    return arr.length;
}
let arr8 = [10, 20, 30];
console.log('exp 8');
console.log(addFirst(arr8, 30));
console.log(arr8);

//exp 9
//reverse arr, use push + shift
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr9 = [];
//
for (let i = arr9.length - 1; i >= 0; i--) {
    newArr9[i] = arr9.shift();
}
console.log(newArr9);
arr9 = newArr9;
//function reverse
function reverse(arr) {
    let arrReverse = [];
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arrReverse[count] = arr[i];
        count++;
    }
    arr.length = 0;
    for (let i = 0; i < arrReverse.length; i++) {
        arr[i] = arrReverse[i];
    }
    return arr;
}
console.log('function reverse');
console.log(reverse(arr9));

//exp10
//add 'A' 'B' 'C'
//get first 
//add 'D' in arr
console.log('exp10')
let queue = [];
queue.push('A', 'B', 'C');
queue.shift();
queue.push('D');
console.log(queue);

//exp11
//limit arr / if arr.length > maxLength => remove value first arr [1, 2, 3, 4], 3 => [2, 3, 4]
function limitArr(arr, maxLength) {
    let position = 0;
    let newArr = [];
    let count = 0;
    if (arr.length <= maxLength) {
        return arr;
    } else {
        position = arr.length - maxLength;
        for (let i = position; i < arr.length; i++) { // < arr.length is enough value in arr, 5 get 3 => run 2 to 5 => 3 times
            newArr[count] = arr[i];
            count++;
        }
        arr.length = 0;
        for (let i = 0; i < newArr.length; i++) {
            arr[i] = newArr[i];
        }
    }
    return arr;
}
let arr11 = [1, 2, 3, 4, 5];
console.log(limitArr(arr11, 3));


//EXP ARRAY METHOD 2 || FOREACH - MAP - FILTER
//exp12
console.log('exp 12');
let arr12 = [1, 2, 3, 4, 5];
//Print all item in array
arr12.forEach(function (item) {
    console.log(item)
})

//exp13
console.log('exp 13');
let arr13 = [1, 2, 3, 4, 5];
//use map for square item in arr
let newArr13 = arr13.map(num => num * num);
console.log(newArr13);

//exp14
console.log('exp 14');
let arr14 = [1, 2, 3, 4, 5, 6];
//use method filter filter is number even
let newArr14 = arr14.filter(num => num % 2 == 0);
console.log(newArr14);

//exp15 || odd: số lẻ :))
//add , subtraction, multiplication, division
console.log('exp 15');
let arr15 = [1, 2, 3, 4, 5];
//filter number odd and multiplication number by 2
let newArr = arr15.filter(num => num % 2 != 0).map(num => num * 2);
console.log(newArr);

//exp16
console.log('exp16');
let arr16 = [10, 15, 20, 25, 30];
//filter number larger 15 and print each element
let newArr16 = arr16.filter(num => num > 15);
newArr16.forEach(function (item) {
    console.log(item);
})

//exp17
console.log('exp17');
let arr17 = ['a', 'b', 'c'];
//use map create 'A', 'B', 'C'
let newArr17 = arr17.map(item => item.toUpperCase());
console.log(newArr17);

//exp18
console.log('exp18');
let arr18 = [1, 2, 3, 4, 5];
//use foreach to total item in array
let total18 = 0;
arr18.forEach(function (item) {
    total18 += item;
})
console.log(total18);

// ||||||||||||||||||||||||||🔥 //
//exp19
let arr19 = [1, 2, 3, 4, 5];
console.log('exp19');
//Filter number even, square number and get number larger ten
let newArr19 = arr19.filter(num => num % 2 == 0)
    .map(num => num * num)
    .filter(num => num > 10);
console.log(newArr19);

//exp20
console.log('exp20');
let users20 = [
    { name: 'A', age: 18 },
    { name: 'B', age: 22 },
    { name: 'C', age: 16 },
];
//get ['A', 'B'] - Users >= 18;
let newUsers20 = users20.filter(element => element.age >= 18); //[{name: 'A', age: 18}, {name: 'B', age: 22}];
let result20 = [];
newUsers20.forEach(function (item) {
    result20.push(item.name);
})
console.log(result20); //['A', 'B'];

//exp21
console.log('exp21');
let arr21 = [1, 2, 3, 4, 5];
//use forEach create new array alike method map
let newArr21 = [];
arr21.forEach(function (item) {
    newArr21.push(item * 2);
})
console.log(newArr21);

//exp22
console.log('exp22');
let arr22 = [5, 10, 15, 20, 25, 30];
//use foreach create new array alike method filter
let newArr22 = [];
arr22.forEach(function (item) {
    if (item >= 20) {
        newArr22.push(item);
    }
});
console.log(newArr22);

// ||||||||||||||||| 🔥🔥 //
//exp23
console.log('exp23');
let cart23 = [
    { name: 'iphone', price: 1000 },
    { name: 'samsung', price: 800 },
    { name: 'xiaomi', price: 500 }
];
//create new arr [1000, 800, 500];
let newCart23 = [];
cart23.forEach(function (item) {
    newCart23.push(item.price);
});
console.log(newCart23);

//exp24
console.log('exp24');
let cart24 = [
    { name: 'iphone', price: 1000 },
    { name: 'samsung', price: 800 },
    { name: 'xiaomi', price: 500 }
];
//filter price large 700
let newArr24 = cart24.filter(item => item.price > 700);
console.log(newArr24);

//exp25
console.log('exp25');
let cart25 = [
    { name: 'iphone', price: 1000 },
    { name: 'samsung', price: 800 },
    { name: 'xiaomi', price: 500 }
];
// create new array, add expensive (price > 700 => true else => false)
/*
    [
        {name: 'iphone', price: 1000, expensive: true},
    ...
    ] 
*/
let newCart25 = [];
cart25.forEach(function (item) {
    newCart25.push({...item}); // spread operator AMAZING :))
    //Tách cái object của item ra thành 1 cái mới
    /*
        item = { name: 'iphone', price: 1000 } thành { name: 'iphone', price: 1000 }
        Nếu không tách mà dùng chung thì thay đổi object thì cái nào sử dụng object cũng thay đổi theo
        Chú ý: nó chỉ copy cái object nông ở ngoài thôi: vd: let obj = {
            name: 'iphone',
            info: { color: 'black' }
        };

        let copy = { ...obj };
        Cái name ok, còn info nó chứa 1 object nữa nên kh lấy kiểu spread operator được :))
    */
})
newCart25.forEach(function (item) {
    if (item.price > 700) {
        item.expensive = true;
    } else {
        item.expensive = false;
    }
})
console.log(newCart25);
console.log(cart25);

//exp26
console.log('exp26');
let cart26 = [
    { name: 'iphone', price: 1000 },
    { name: 'samsung', price: 800 },
    { name: 'xiaomi', price: 500 }
];
//filter price large 700 get name and print result
let newCart26 = cart26.filter(item => item.price > 700);
newCart26.forEach(function(item){
    console.log(item.name);
});


// |||||||| Interview 🔥 🔥 \\
//exp 27
console.log('exp27');
let arr27 = [1, 2, 3, 4, 5];
//use method map if item number is even => multitpicaiton two, else keep unchange
let newArr27 = arr27.map(function(num){
    if(num % 2 == 0){
        num = num * 2; //phai gan lai gia tri va return gia tri thay doi trong ham map
        return num;
    }
    return num;
});
console.log(newArr27);

//exp 28
console.log('exp28');
let arr28 = [1, 2, 3, 4, 5];
//use method filter but remove number divisible(chia hết) division(phép chia) by three
let newArr28 = arr28.filter(num => num % 3 !=0);
console.log(newArr28);

//exp 29
console.log('exp29');
let arr29 = [1, 2, 3, 4, 5];
//use 1 row, filter number even, multipication three and print
arr29.filter(number => number % 2 === 0).map(item => item * 3).forEach(item => console.log(item));

//exp 30
console.log('exp30');
let users30 = [
  {name: 'A', age: 18},
  {name: 'B', age: 22},
  {name: 'C', age: 16},
  {name: 'D', age: 30}
];
//condition age > 20, just take name, write brief
let newUser30 = users30.filter(item => item.age > 20).map(item => item.name);// filter chạy trước => tạo ra mảng mới vừa lặp => thực hiện map => trả về mảng mới
// Thứ tự viết = thứ tự chạy || Viết trước chạy trước 
console.log(newUser30);

// 🔥||||| SOME - FIND - REDUCE |||||🔥 //
//
console.log('find1');
let arrFind1 = [5, 10, 15, 20];
//get first number > 10;
let newArrFind1 = arrFind1.find(num => num > 10);
console.log(newArrFind1);

//
console.log('find2');
let usersFind2 = [
  {name: 'Dung', age: 18},
  {name: 'An', age: 22},
  {name: 'Minh', age: 16}
];
//find name user is 'An'
let resultUserFind2 = usersFind2.find(user => user.name = 'An');
console.log(resultUserFind2);

//
console.log('find3');
let usersFind3 = [
  {name: 'Dung', age: 18},
  {name: 'An', age: 22},
  {name: 'Minh', age: 16}
];
//find user have age smaller 18
let resultUserFind3 = usersFind3.find(user => user.age < 18);
console.log(resultUserFind3);

//
console.log('find4');
let productsFind4 = [
  {id: 1, name: 'iphone'},
  {id: 2, name: 'samsung'},
  {id: 3, name: 'xiaomi'}
];
//find product have id = 2;
let newProductsFind4 = productsFind4.find(product => product.id === 2);
console.log(newProductsFind4);

//interview style
console.log('find5');
let emailsFind5 = [
  'a@gmail.com',
  'b@gmail.com',
  'admin@gmail.com'
];
//find email have 'admin'
let newEmailsFind5 = emailsFind5.find(email => {
    return email.includes('admin'); //kiểm tra chuỗi chứa 'admin'
});
console.log(newEmailsFind5);

//Some
console.log('some1');
let arrSome1 = [1, 3, 5, 8];
//check arr have number even
let resultArrSome1 = arrSome1.some(num => num % 2 === 0);
console.log(resultArrSome1);

//
console.log('some2');
let usersSome2 = [
  {name: 'A', active: false},
  {name: 'B', active: false},
  {name: 'C', active: true}
];
//check list users have user active
let resultSome2 = usersSome2.some(user => user.active == true);
console.log(resultSome2);

//
console.log('some3');
let usersSome3 = [
  {email: 'admin@gmail.com'},
  {email: 'test@gmail.com'}
];
//check list users have email user is 'admin@gmail.com'
let resultSome3 = usersSome3.some(email => email.email === 'admin@gmail.com');
console.log(resultSome3);

//
console.log('some4');
let passwordsSome4 = ['123456', 'abcdef', '123abc'];
//check length password  smaller 6 character
let resultSome4 = passwordsSome4.some(password => password.length < 6);
console.log(resultSome4);

//
console.log('some5');
let cartSome5 = [
  {name: 'iphone', quantity: 1},
  {name: 'samsung', quantity: 0}
];
//check cart product have quantity = 0
let resultSome5 = cartSome5.some(cart => cart.quantity === 0);
console.log(resultSome5);

// 🔥 REDUCE 🔥
//11
console.log('reduce1');
let arrReduce1 = [1, 2, 3, 4, 5];
//Total
let resultReduct1 = arrReduce1.reduce((acc, num) => acc + num, 0);
console.log(resultReduct1);

//12
console.log('reduce2');
let arrReduce2 = [1, 2, 3, 4, 5];
//multipication
let resultReduce2 = arrReduce2.reduce((acc, num) => acc * num, 1);
console.log(resultReduce2);

//13
console.log('reduce3');
let arrReduce3 = [5, 10, 20, 30];
//find number largest in array by reduce
let resultReduce3 = arrReduce3.reduce((acc, num) => {
    if(num > acc){
        acc = num;
    }
    return acc;
},0);
console.log(resultReduce3);

//14
console.log('reduce4');
let arrReduce4 = [1, 2, 3, 4, 5];
//count length item not use length
let lengthArrReduce4 = arrReduce4.reduce((acc, item) => {
    acc++;
    return acc;
},0)
console.log(lengthArrReduce4);
