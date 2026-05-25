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