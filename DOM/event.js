// DOM EVENT JAVASCRIPT
// Click
let btnClickEvent = document.getElementById('btn-clickEvent');
btnClickEvent.addEventListener('click', () => console.log('Clicked !!!')
);

// Input
let inputEvent = document.getElementById('input-Event');
inputEvent.addEventListener('input', function(e){ // e là biến phát sinh ra event, có thể dùng inputEvent.value nhưng nếu nhiều input cùng class thì kh nên, nên dùng e.target nha
    console.log(e.target.value);
});

// Submit
let formSubmit = document.getElementById('form-submit');
let inputSubmit = document.querySelector('.input-submit');
let btnSubmit = document.getElementById('btn-submit');

formSubmit.addEventListener('submit', function(e){
    e.preventDefault(); // ngăn chặn việc form chuyển dữ liệu và load lại trang nha
    console.log('Submited !!!');
});

// Bubbling / stopPropagation
let parent = document.getElementById('parent');
let child = document.getElementById('child');

child.addEventListener('click', (e) => {
    e.stopPropagation(); // ngăn chặn sủi bọt bubbling lan ra thẻ cha
    console.log('Click child');
});
parent.addEventListener('click', () => console.log('Click parent'));
//Bubbling là sủi bọt, nó sử lý sử kiện ở con và lên tiếp sự kiện ở thẻ cha