// 1. BASIC DOM (bắt buộc nắm cực chắc)
// Bài 1: Đổi text
let title = document.getElementById('title');
let btnChangeText = document.querySelector('.btn-changeText');

btnChangeText.addEventListener('click', function(){
    title.innerText = 'Welcome Dung';
});

// Bài 2: Đổi màu
let text = document.querySelector('.text');
let btnChangeColor = document.querySelector('.btn-changeColor');

btnChangeColor.addEventListener('click', function(){
    text.style.color = 'red';
});

//Bài 3: Toggle class
let box = document.querySelector('.box');
let btnToggle = document.querySelector('.toggle');
btnToggle.addEventListener('click', function(){
    box.classList.toggle('active');
});

//Bài 4: Get input value
let name = document.getElementById('name');
let btnShow = document.querySelector('.btn-show');
let inputValue = document.getElementById('input-value');

btnShow.addEventListener('click', function(){
    if(name.value !== 0){
        inputValue.textContent = name.value;
    }
}); 

// Bai 5: Hide / Show password
let passWord = document.querySelector('.passWord');
let btnShowPassWord = document.querySelector('.btn-ShowPassWord');

btnShowPassWord.addEventListener('click', function(){
    if(passWord.type == 'password'){
        passWord.type = 'text';
    }
    else{
        passWord.type = 'password';
    }
});

// || 2. INTERMEDIATE DOM (gần web thật) || //
// Bai 6: Couter App
let num = document.getElementById('num');
let btnIncrease = document.getElementById('btn-increase');
let btnDecrease = document.getElementById('btn-decrease');
let btnReset = document.getElementById('btn-reset');

btnIncrease.addEventListener('click', function(){
    num.innerText = Number(num.innerText) + 1; //Chuyen sang number, không ++ được vì Number() đang là 1 object
});

btnDecrease.addEventListener('click', function(){
    num.innerText = Number(num.innerText) - 1; //Chuyen sang number, không -- được vì Number() đang là 1 object
});

btnReset.addEventListener('click', function(){
    num.innerText = 0;
});

// Bài 7:
let list = document.getElementById('list');
let inputTask = document.querySelector('.inputTask');
let btnAddTask = document.querySelector('.btn-addTask');

let resultList = document.querySelector('.resultList');


btnAddTask.addEventListener('click', function(){
    //box chua task
    let taskBox = document.createElement('div');

    //noi dung task
    let itemList = document.createElement('p');
    itemList.innerText = inputTask.value;

    //button xoa task
    let btnRemoveTask = document.createElement('button');
    btnRemoveTask.innerText = 'remove';

    btnRemoveTask.addEventListener('click', function(){
        taskBox.remove();
    });

    taskBox.append(itemList, btnRemoveTask);
    resultList.append(taskBox);

    inputTask.value = '';
});
/**
 * Mỗi lần tạo ra 1 task thì giống như tạo ra 1 cái hộp v, ứng dụng của closure hàm chạy rồi vẫn nhớ biến scope cha.
 * Ví dụ task 1 chạy, tạo ra 1 task và 1 nút chứa function xóa cái task tổng bên ngoài
 * khi tạo nó sẽ nhớ cái task tổng đó và lưu vào bộ nhớ
 * nên khi chạy nhiều task thì mỗi task điều nhớ 1 cái task bự của nó như mỗi cái hộp tạo ra thì phần tử trong hộp chỉ là của hộp đó thôi
 * nên là khi xóa vẫn có thể xóa task đúng ngay vị trí đó
 * nhớ khai báo biến bên trong khi bấm nút tạo task
 */

// Bài 8: Search Filter
let data = ['Dung', 'An', 'Minh', 'Long'];
let inputText = document.getElementById('inputText');
let resultSearchFilter = document.querySelector('.resultSearchFilter');
inputText.addEventListener('input', function(){
    let keyword = inputText.value;
    let result = data.filter(item => {
        return item.toLowerCase().includes(keyword.toLowerCase());//Khi nào true thì filter mới trả về phần tử đó vào 1 mảng mới
    });
    console.log(result);
    render(result); //render ra kết quả trả về danh sách những user true
})
function render(data){
    resultSearchFilter.innerHTML = ''; //Xóa nội dung con bên trong, thẻ cha ul vẫn còn, chỉ xóa cái text Result: thôi
    //nếu xóa thẻ đó luôn thì phải dùng remove
    data.forEach(user => {
        resultSearchFilter.innerHTML += `<li>${user}</li>` //thêm vào thẻ ul danh sách thẻ li user của data
    });
}
render(data); //render ra danh sách ban đầu

