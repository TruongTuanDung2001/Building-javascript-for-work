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