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
    if (success) {
        resolve('Thành công'); //gám giá trị bắt lỗi khi thành công
    } else {
        reject.log('Thất bại'); //gán giá trị khi thất bại
    }
});

promise
    .then((data) => {
        console.log(data); //Chạy khi promise thành công
    })
    .catch((error) => {
        console.log(error); //Chạy khi promise thất bại
    })
    .finally(() => {
        console.log('Finaly'); //Lúc nào cũng chạy cuối cùng

    })

//
function orderFood() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve('Burger');
        // }, 2000);
        // setTimeout(() => {
        //     reject('No food');
        // }, 3000)
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
    // setTimeout(() => {
    //     rs('Hello World');
    // }, 2000);
});

promiseE1
    .then((rs) => {
        console.log(rs);
    });
console.log(typeof promiseE1);

//nếu số > 5 => resolve else reject
let num = 6;
let promiseE2 = new Promise((rs, rj) => {
    if (num > 5) {
        rs('Number larger five');
    } else { rj('Number smaller five '); }
});

promiseE2
    .then((rs) => {
        console.log(rs);
    })
    .catch((rj) => {
        console.log(rj);
    })


//ASYNC/AWAIT
// async là function trả về promise
// await chờ promise
// try/catch bắt lỗi reject


//cấu trúc cơ bản
// async function getUsers(){

//     try{

//         // gọi API
//         let res = await fetch(url); lấy dữ liệu API

//         // convert JSON
//         let data = await res.json(); chuyển dữ liệu res thành chuỗi để làm việc

//         // dùng data
//         console.log(data);

//     }catch(error){

//         // API lỗi
//         console.log(error);
//     }
// }

//try catch là để bắt lỗi khi lấy dữ liệu sai, code hệ thống vẫn chạy ok
//await luôn làm việc với promise, nếu promise là 1 function tự tạo có resolve và reject thì nếu thành công trả về resolve và ngược lại trả về reject
// vd:
// function orderFood(){
//     return new Promise((resolve, reject) => {
//         reject('Hết đồ ăn');
//     });
// }

// async function test(){
//     try{
//         let food = await orderFood();

//         console.log(food); 

//     }catch(error){
//         console.log(error);//log ra chỗ này vì ở hàm order food chỉ có reject / nếu như có resolve và có thêm reject thì hiện resolve trong try -> log ra và kết thúc hạm
//     }
// }

// test();

//Exp async/await
//Tạo hàm delay 3 giây rồi log: 'Done'
function delay() {
    return new Promise((rs, rj) => {
        // setTimeout(() => {
        //     rs('Done');
        // },2000)
    });
}

//Cách 1: không dùng async
delay()
    .then((rs) => console.log(rs))
    .catch((rj) => console.log(rj))

//Cách 2: dùng async
async function test() {
    try {
        let resultDelay = await delay();
        console.log(resultDelay);
    } catch (error) {
        console.log('error');
    }
}
test(); //OK

//Fetch API
//https://jsonplaceholder.typicode.com/users
async function getUserAPI() {
    try {
        let res = await fetch('http://localhost:3000/users'); //lấy dữ liệu api
        //kiểm tra rs (response) có request thành công chưa
        if (res.ok) {
            let data = await res.json();// chuyển dữ liệu api thành kiểu sử dụng được {...}
            console.log(res.status); //200
            console.log(data);
        }
        /**
         * Bảng status res
         * | Status | Ý nghĩa      |
            | ------ | ------------ |
            | 200    | OK           |
            | 201    | Created      |
            | 400    | Bad request  |
            | 401    | Unauthorized |
            | 404    | Not found    |
            | 500    | Server error |

         */
    } catch (error) {
        console.log(error);
    }
}

getUserAPI();//xuất kết quả

//POST METHOD
async function postUser() {
    try {
        //
        let newUser = {
            id: 5,
            name: "King man",
            email: "kingmanoffice@gmail.com",
            age: 30,
            avatar: "https://i.pravatar.cc/150?img=3",
            isAdmin: false,
        }
        //
        let response = await fetch(
            'http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            }
        );
        //
        if (response.ok) {
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
//
let btnPost = document.getElementById('btn-post');
btnPost.addEventListener('click', function(){
    postUser();
});
// createUser();
/**
 *  | Method | Ý nghĩa     |
    | ------ | ----------- |
    | GET    | lấy dữ liệu |
    | POST   | tạo dữ liệu |
    | PUT    | sửa toàn bộ |
    | PATCH  | sửa 1 phần  |
    | DELETE | xoá         |
 */

/** Khai báo kiểu của dữ liệu để server biết
 *  | Content-Type        | Ý nghĩa      |
    | ------------------- | ------------ |
    | application/json    | dữ liệu JSON |
    | text/html           | HTML         |
    | text/plain          | text         |
    | multipart/form-data | upload file  |
 */

// Body: là dữ liệu gửi lên server, nhớ chuyển sang kiêu JSON

//PUT PATH
async function putUser(){ //thay đổi toàn bộ dữ liêu, nếu ít thuộc tính như chỉ có 'name' như ở dưới thì cập nhật chỉ có id(mặc định theo url) và cái name mới thôi.
    try {
        let updateUser = {
            name: "truongtuandung",
            email: "truongtuandung@gmail.com",
            age: 25,
            avatar: "https://i.pravatar.cc/150?img=3",
            isAdmin: false
        }

        let response = await fetch('http://localhost:3000/users/4',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        });

        if(response.ok){
            let data = await response.json();
            console.log('Put api success');
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
let btnPut = document.getElementById('btn-put');
let inputName = document.getElementById('input-name');
btnPut.addEventListener('click', function(){
    putUser();
});

//PATCH
async function patchNameUser(name){ //sửa 1 phần của user có id là 4 trong url thuiii, sửa xong chỉ phần đó thay đổi, vd: name
    try {
        let newUser = {
            name: name
        }

        let response = await fetch('http://localhost:3000/users/4', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if(response.ok){
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
let btnPatch = document.getElementById('btn-patch');
btnPatch.addEventListener('click', function(e){
    e.preventDefault();
    if(inputName.value.length != 0){
        patchNameUser(inputName.value);
    }else{ alert('No input data'); }
})

//Delete
async function deleteUser(){
    let responseGetUser = await fetch('http://localhost:3000/users');
    let userApi = await responseGetUser.json();
    console.log(userApi);
    
    let lastUser = userApi[userApi.length - 1];
    //
    try {
        let response = await fetch(`http://localhost:3000/users/${lastUser.id}`, {
            method: 'DELETE'
        });

        if(response.ok){
            let data = response.json();
            console.log(data);
        }
        
    } catch (error) {
        console.log(error);
    }
}
let btnDelete = document.getElementById('btn-delete');
btnDelete.addEventListener('click', function(){
    deleteUser();
});