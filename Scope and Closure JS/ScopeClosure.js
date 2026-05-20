//Scope: phạm vi
/**
 * Phạm vi truy cập của biến
 * Biến được tạo ra ở đâu thì dùng được trong phạm vi đó
 * Các loại biến: 
 *  A. Global scope: biến tạo bên ngoài function/block ở đâu cũng sử dụng được
 * 
 */
let name = 'Truong Tuan Dung';
function sayHi(name){
    console.log('Hi ' + name);
}
sayHi(name);

/**
 * B. Function scope: biến được tạo ra ở trong function / chỉ dùng được trong function
 * 
 */
function showAge(){
    let age = 25;
    console.log('Your are ' + age + ' years old');
}

//console.log(age);//Fail | age is not defined tuổi kh được xác định
showAge();

/**
 * C. Block scope: là biến được tạo trong cặp ngoặc { } vd: if{} else{} for{}....
 * Quan trọng: let và const trong {} bên ngoài kh sử dụng được || var thì có thể sử dụng bên ngoài
 */
for(let i = 0; i < 3; i++){
    let a = 'A';
    const b = 'B';
    var c = 'C';
}
//console.log(a); //error a is not define
//console.log(b); //error b is not define
console.log(c); // result: C => hiện đại ít dùng var :))

/**
 * Lexical Scope (quan trọng): Có nghĩa là nó sẽ tìm biến gần nhất với nó để sử dụng, nếu không có nó tìm tiếp ở bên ngoài, kh có thì ra ngoài tiếp
 */
let a = 10; //a là biến global

function outer() {

    let b = 20; //b là biến block

    function inner() {
        console.log(a); //trong inner: không có => nhảy ra outer: không có => global: có => lấy a = 10;
        console.log(b); //trong inner: không có => nhảy ra outer: có => b = 20;
    }

    inner();
}

outer(); //Biến được lấy từ trong ra ngoài nha

/**
 * Nếu như lấy được biến rồi thì kh cần ra ngoài nữa, lấy biến gần nhất lun
 */
let d = 1; //d là biến global

function outer() {

    let d = 2;//d là biến trong block

    function inner() {
        console.log(d); //trong inner: không có => nhảy ra outer: có => lấy d = 2 || mặc kệ biến d có khai báo global là d = 1 || lấy thằng gần nhất là xong
    }

    inner();
}

outer();


//CLOSURE: Là function nhớ được biến bên ngoài của nó, ngay cả khi function bên ngoài đã chạy xong
console.log('Closure');

//Sau khi chạy xong thì function tạo mới, vì num nằm bên trong function, kh có function con giữ lại 
function count(){
    let num = 0;
    num++;
    console.log(num);
    return num;
}

count();
count();
count();

function countClosure(){
    let num = 0;
    // num++; nếu để ngoài không để bên trong function con thì kh nhớ biến, khi làm sẽ quay lại từ đầu
    return function(){

        //num++; //nếu biến đổi biến trong hàm con, sẽ nhớ biến, mỗi khi gọi sẽ sử dụng lại 
        console.log(num++);
    }
}
//Chỗ này vẫn ra 1 vì tạo function => in ra chứ có lưu lại gì đâu mà đòi nó nhớ
countClosure(); //1
countClosure(); //1
countClosure(); //1

// phải tạo biến hứng cái function
const fn = countClosure();
fn(); //1
fn(); //2
fn(); //3

/**
     * countClosure()
        ↓
    tạo num = 0
        ↓
    return function
        ↓
    fn giữ closure
        ↓
    fn() dùng lại num cũcountClosure()
        ↓
    tạo num = 0
        ↓
    return function
        ↓
    fn giữ closure
        ↓
    fn() dùng lại num cũ
 */

//Arrow function
function helloWorld(){
    return console.log('Hello World ');
}

helloWorld();

helloWorld2 = () => console.log('Hello World 2');

helloWorld2();