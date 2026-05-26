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

// Delegation
// Cách 1 tốn nhiều addEventListener
let item = document.querySelectorAll('.item');
// item.forEach((i) => {
//     i.addEventListener('click', () => console.log(i.innerText));
// })

// Cách 2: Delegation: thẻ cha quản lý nhiều thẻ con
let list = document.querySelector('.list');
list.addEventListener('click', function(e){ //e là các thẻ li con trong thẻ ul cha, nên gán sự kiện cho thẻ cha thì khi e.target click tức là thẻ con li được click. Thẻ nào click thì show nội dung thẻ đó ra, không cần thêm mối thẻ con li 1 addEventListener làm gì
    console.log(e.target.textContent);
});
