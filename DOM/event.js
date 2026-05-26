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

// Change
// vd1:
let inputChange = document.getElementById('input-change');
inputChange.addEventListener('change', (e) => console.log(e.target.value)); //khi bấm dữ liệu vào input, sau đó click chuột ra ngoài thì nó mới chạy.
//Change chạy khi kết quả xong, được xác nhận thì mới chạy sự kiện

//vd2:
let select = document.getElementById('select');
select.addEventListener('change', function(e){
    console.log(e.target.value); //sau khi option thay đổi thì mới chạy 
});

// KeyUp / KeyDown
let inputUpDown = document.querySelector('.upDown');
//up
inputUpDown.addEventListener('keyup', (e) => console.log(e.key));//Mình nhấn phím xuống, khi nào bỏ ngón tay ra, phím bất lên thì chạy cái đó
//e.key là xuất cái key(nút bấm) vừa mới bấm

//down
inputUpDown.addEventListener('keydown', (e) => console.log(e.key));
// nhấn phím xuống là nhận



