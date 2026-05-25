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
