//PROMISE
// console.log('A');
// setTimeout(() =>{
//     console.log('B');
// });
// console.log('C');
// resul: A C B
//Promise là lời hứa cho dữ liệu sẽ có trong tương lai
//pending: đang chờ
//resolve: thành công
//reject: thất bại

let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve('Thành công'); //gám giá trị bắt lỗi khi thành công
    }else{
        reject.log('Thất bại'); //gán giá trị khi thất bại
    }
});

promise
    .then((data) =>{
        console.log(data); //Chạy khi promise thành công
    })
    .catch((error) => {
        console.log(error); //Chạy khi promise thất bại
    })
    .finally(() =>{
        console.log('Finaly'); //Lúc nào cũng chạy cuối cùng
        
    })

//
function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Burger');
        }, 2000);
        setTimeout(() => {
            reject('No food');
        }, 3000)
    });
}

orderFood()
    .then((food) => { //food là tham số của resolve -  chỉ được nhận 1 tham số
        console.log(food);
    })
    .catch((food) => { //food là tham số của reject - chỉ được nhận 1 tham số
        console.log(food);
    })

//exp promise
// tạo promise sau 2 giây trả về 'Hello world'
let promiseE1 = new Promise((rs, rj) => {
    setTimeout(() => {
        rs('Hello World');
    }, 2000);
});

promiseE1
    .then((rs) => {
        console.log(rs);
    });
console.log(typeof promiseE1);

//nếu số > 5 => resolve else reject
let num = 6;
let promiseE2 = new Promise((rs, rj) => {
    if(num > 5){
        rs('Number larger five');
    }else{ rj('Number smaller five '); }
});

promiseE2
    .then((rs) => {
        console.log(rs);
    })
    .catch((rj) => {
        console.log(rj);
    })
