// https://jsonplaceholder.typicode.com/users
/**
 * Bài 1 — POST cơ bản nhất
Mục tiêu
Gửi user lên API.
 */
//GET api
async function getUser(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(response.ok){
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
getUser();

//POST
async function postUser(){
    try {
        let newUser = {
            name: 'Dung',
            age: '25'
        }
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'Application-json',
            },
            body: JSON.stringify(newUser)
        });
        if(!response.ok){
            throw new Error('Post API failed');
        }else{
            let data = await response.json();
            console.log(data);
            getUser();
        }
    } catch (error) {
        console.log(error);
    }
}
//
postUser();

//exp 2: Form tạo user
let inputUser = document.getElementById('inputUser');
let btnCreateUser = document.querySelector('.btn-createUser');

async function postUser(user){
    try {
        let newUser = {
            name: user
        }

        // let response = await fetch('https://jsonplaceholder.typicode.com/users',{
        //     method: 'POST',
        //     'Content-Type':  'Application-json',
        //     body: JSON.stringify(newUser)
        // })

        let response = await fetch('https://967c0f9a-7dc9-42d4-9a85-205ef5446159.mock.pstmn.io/',{
            method: 'POST',
            headers: {
                'Content-Type':  'Application-json',
            },
            body: JSON.stringify(newUser)
        })
        if(!response.ok){
            throw new Error('Post API Failed')
        }else{
            let data = await response.json();
            console.log(data);
        }

    } catch (error) {   
        console.log(error);
    }
}

btnCreateUser.addEventListener('click', function(){
    postUser(inputUser.value);
})

//exp3
/**
 * [
  {
    "id": 1,
    "name": "Dung",
    "age": 25,
    "address": "TP.HCM"
  }
]

https://967c0f9a-7dc9-42d4-9a85-205ef5446159.mock.pstmn.io
 */