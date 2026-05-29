// https://jsonplaceholder.typicode.com/users
/**
 * Bài 1 — POST cơ bản nhất
Mục tiêu
Gửi user lên API.
 */
//GET api
async function getUser(){
    try {
        let response = await fetch('http://localhost:3000/users');
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
// async function postUser(){
//     try {
//         let newUser = {
//             name: 'Dung',
//             age: '25'
//         }
//         let response = await fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newUser)
//         });
//         if(!response.ok){
//             throw new Error('Post API failed');
//         }else{
//             let data = await response.json();
//             console.log(data);
//             getUser();
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// postUser();

//exp 2: Form tạo user
let inputUser = document.getElementById('inputUser');
let btnCreateUser = document.querySelector('.btn-createUser');

async function postUser(user){
    try {
        let newUser = {
            name: user
        }

        let response = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type':  'application/json',
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
//mockapi: https://mockapi.io/projects/6a196042489e47157519de00#
// fake api: https://6a196042489e47157519ddff.mockapi.io/api/user/users

//npx json-server db.json mở server để fake api


